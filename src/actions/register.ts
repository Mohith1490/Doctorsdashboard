'use server'

import bcrypt from 'bcryptjs'
import * as z from 'zod';
import { RegisterSchema } from '@/type/schema';
import { getCollections } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/token';
import { sendVerificationEmail } from '@/lib/mail';
import { UserRole } from '@/type/types';


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFileds = RegisterSchema.safeParse(values);
    const { users } = await getCollections();
    if (!validatedFileds.success) {
        return { error: "Invalid fileds" };
    }

    const { email, password, username } = validatedFileds.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!" }
    }

    await users.insertOne({
        name: username,
        email,
        password: hashedPassword,
        role:UserRole.ADMIN
    });

    const varificationToken = await generateVerificationToken(email);
     await sendVerificationEmail(
        varificationToken.email,
        varificationToken.token
    );
    return { success: "Confirmation Email Sent" };
}
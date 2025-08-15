import Google from "next-auth/providers/google";
import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth';
import bcrypt from 'bcryptjs'

import { LoginSchema } from '@/type/schema';
import { getUserByEmail } from './data/user';



export default {
    // providers: [Google, Github],
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({
            // @ts-expect-error causing error onfulfilled
            async authorize(credentials) {
                const validateFileds = LoginSchema.safeParse(credentials);
                
                if (validateFileds.success) {
                    const { email, password } = validateFileds.data

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );                   
                    if (passwordMatch) return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name ?? null,
                        role: user.role ?? null,
                    };
                }
                return null;

            }
        })]
} satisfies NextAuthConfig
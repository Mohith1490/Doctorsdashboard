"use server"

import * as z from "zod"
import  { getCollections }  from "@/lib/db"
import { getUserByEmail } from "@/data/user"
import { currentUser } from "@/lib/auth"
import { UserRoleUpdateSchema } from "@/type/schema"
import { UserRole } from "@/type/types"


const {users} = await getCollections();
export const updateUserRole = async (values: z.infer<typeof UserRoleUpdateSchema>) => {

    const user = await currentUser()

    if (!user || user.role !== UserRole.SUPER_ADMIN) {
        return {error: "Unauthorized"}
    }

    const dbUser = await getUserByEmail(values.email);

    if(!dbUser) {
        return {error: "User Not found"}
    }

    await users.updateOne(
        {_id:dbUser._id},
        {$where:{id:dbUser._id}},
        )

    return {success: "User role updated successfully!"}
}
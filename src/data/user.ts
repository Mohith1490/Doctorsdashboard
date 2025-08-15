import { getCollections }  from "@/lib/db"
import { ObjectId } from "mongodb";

const {users} = await getCollections(); 
export const getUserByEmail = async (email: string) => {
    try {
        const user = await users.findOne({email:email});

        return user;
    } catch {
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await users.findOne({ _id:new ObjectId(id)});

        return user;
    } catch {
        return null;
    }
}
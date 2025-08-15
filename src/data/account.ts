import { getCollections }  from "@/lib/db";
import { ObjectId } from "mongodb";

export const getAccountByUserId = async (userId: ObjectId) => {
    const {accounts} =await getCollections();
    try {
        const account = await accounts.findOne({_id:userId})

        return account;
    } catch {
        return null;
    }
}
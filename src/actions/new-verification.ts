'use server'
import { getUserByEmail } from "@/data/user"
import { getVerificationTokenByToken } from "@/data/verification-token"
import { getCollections } from "@/lib/db";


export const newVerification = async(token: string) => {
    const existingToken = await getVerificationTokenByToken(token);
    const {users,verificationtoken} = await getCollections();

    if(!existingToken) {
        return { error: "Token does not exist!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired) {
        return { error: "Token has expired" }
    }

    const existingUser = await getUserByEmail(existingToken.email as string);

    if(!existingUser) {
        return { error: "Email does not exist!" }
    }
    
    await users.updateOne(
         { _id: existingUser._id},
        {
           $set:{
            emailVerified: new Date(),
            email: existingUser.email,
        },
        }
    );

    await verificationtoken.deleteOne({
       id: existingToken.id 
    });

    return { success: "Email verified!" }
}
import  { getCollections }  from "@/lib/db";

const {passwordresettoken} = await getCollections()
export const getPasswordResetTokenByToken = async(token: string) => {
    try {
        const passwordResetToken = await passwordresettoken.findOne({
           token:token
        });

        return passwordResetToken;
    } catch {
        return null
    }
}


export const getPasswordResetTokenByEmail = async(email: string) => {
    try {
        const passwordResetToken = await passwordresettoken.findOne({
            email:email
        });

        return passwordResetToken;
    } catch {
        return null
    }
}
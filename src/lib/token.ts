import { getCollections } from './db';
import { v4 as uuidv4 } from 'uuid'
import { getVerificationTokenByEmail } from '@/data/verification-token';
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token';


export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime()
        + 3600 * 1000)

    const existingToken = await getPasswordResetTokenByEmail(email)
    const { passwordresettoken } = await getCollections();
    if (existingToken) {
        await passwordresettoken.deleteOne({
            id: existingToken._id
        });
    }

     await passwordresettoken.updateOne(
        { _id: existingToken?._id, },
        {
            $set: [
                email,
                token,
                expires,
            ]
        }
    )

    return {email,token}

}

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime()
        + 3600 * 1000)

    const existingToken = await getVerificationTokenByEmail(email)
    const { verificationtoken } = await getCollections();
    if (existingToken) {
        await verificationtoken.deleteOne({
            where: {
                id: existingToken.id,
            }
        });
    }

    verificationtoken.insertOne({
        email,
        token,
        expires,
    });
    return {email,token}
}
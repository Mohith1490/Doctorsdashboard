import  { getCollections }  from '@/lib/db'


const {verificationtoken } =await getCollections();
export const getVerificationTokenByEmail = async (
    email: string
) => {

    try {
        const verifiedToken = await verificationtoken.findOne({email:email});

        return verifiedToken;
    } catch {
        return null
    }
}


export const getVerificationTokenByToken = async (
    token: string
) => {
    try {
        const verifiedToken = await verificationtoken.findOne({token:token});

        return verifiedToken;
    } catch {
        return null
    }
}
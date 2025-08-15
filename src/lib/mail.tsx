import { Resend } from 'resend';
import {SignInWithLink}  from '@/components/resend-mail-template';
import { PasswordResetEmailLink } from '@/components/resend-password-reset-template';
const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {

    try {

        const passwordResetLink = `${domain}/auth/new-password?token=${token}`;

        await resend.emails.send({
            from: "no-reply@mydawaiwala.com",
            to: email,
            subject: "Reset your password",
            // html: `<p>Click <a href="${passwordResetLink}">here</a> to reset password</p>`
            react: PasswordResetEmailLink({ magicLink: passwordResetLink })
        })
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

export const sendVerificationEmail = async (
    email: string,
    token: string,
) => {

    try {
        const confirmLink = `${domain}/auth/new-verification?token=${token}`;

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Confirm your email",
            // html: `<p>nothing new</p>
            react: <SignInWithLink magicLink={confirmLink} /> ,
        });
    } catch (error) {
        console.log(error);        
        return Response.json({ error }, { status: 500 });
    }
}
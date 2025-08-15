'use client'

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_ROUTE } from "@/route";

export const Social = () => {

    const OnClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_ROUTE
        })
    }

    return (
        <div className="flex justify-center items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => OnClick("google")}
            >
                Google
            </Button>
        </div>
    )
}
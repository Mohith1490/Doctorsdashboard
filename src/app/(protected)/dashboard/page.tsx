"use client"

import Link from "next/link"

export default function ProtectedPage() {
    return (
        <>
            <div>Welcome to dashboard</div>
            <Link href={"/dashboard/settings"}>
                Go to settings
            </Link>
            <Link href={"/dashboard/bookslot"}>
                book slot
            </Link>
        </>
    )
}
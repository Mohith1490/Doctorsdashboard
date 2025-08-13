import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Developed by SIDA Technologies",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    )
}
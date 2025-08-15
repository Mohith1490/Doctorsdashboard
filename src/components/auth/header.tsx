import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(" w-40 text-3xl font-semibold", font.className)}>
        <Image src="/logo.png" alt="logo" width={0} height={0} className="hidden dark:block w-full" />
        <Image src="/logo.svg" alt="logo" width={0} height={0} className="block dark:hidden" />
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

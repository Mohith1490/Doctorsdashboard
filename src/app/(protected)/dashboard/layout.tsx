import SlimSidebar from "@/components/SlimSidebar";
import Providers from "./providers";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Providers>
        <SlimSidebar>
          {children}
        </SlimSidebar>
      </Providers>
    </>
  )
}

import Link from "next/link";

export default function Home() {
  return (
    <>
     <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-8">
        <Link
          href="/dashboard/"
        >
          <button className="py-2 px-4 border rounded-md bg-violet-600 text-white font-medium">Go to Dashboard</button>
        </Link>
        </div>
      </div>
    </>
  );
}

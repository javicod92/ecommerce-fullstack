import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-zinc-400 p-2 rounded-lg flex-wrap md:flex-row md:justify-between">
      <h2 className="text-center">
        Hello, <b className="text-cyan-800">{session?.user?.email}</b>
      </h2>
      <div className="flex items-center gap-2">
        <SignOutButton />
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt=""
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}

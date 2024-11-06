import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="text-blue-900">
      Hello, {session?.user?.email}
      <div className="">
        <SignOutButton />
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt=""
            width={56}
            height={56}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}

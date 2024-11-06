import { auth } from "@/auth";
import SignInButton from "@/components/auth/SignInButton";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center">
        <SignInButton />
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center text-white">
      <div className="">Logged in {session.user?.email}</div>
    </div>
  );
}

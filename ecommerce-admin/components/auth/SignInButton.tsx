import { signIn, signOut } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="bg-white py-2 px-4 rounded-lg" type="submit">
        Sign in with Google
      </button>
    </form>
  );
}

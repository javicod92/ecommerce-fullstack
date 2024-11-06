import { auth } from "@/auth";
import SignInButton from "@/components/auth/SignInButton";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return (
      <html lang="en">
        <body>
          <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center">
            <SignInButton />
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-zinc-800 flex min-h-screen`}
      >
        <NavBar />
        <main className="bg-white flex-grow">{children}</main>
      </body>
    </html>
  );
}

import { UserButton } from "@/components/user-button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { getUser } = getKindeServerSession();

  const kindeUser = await getUser();
  if (!kindeUser) redirect("/api/auth/login");

  return (
    <div className="flex min-h-screen flex-col px-16 py-4">
      <header className="flex items-center justify-between">
        <Logo />
        <UserButton user={kindeUser} />
      </header>

      <main className="grow bg-muted">{children}</main>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2 font-bold">
      <Image
        src="/logo.png"
        alt="KhatGPT"
        width={400}
        height={400}
        className="size-10 object-cover"
      />
      <h2 className="text-2xl">KhatGPT</h2>
    </Link>
  );
};

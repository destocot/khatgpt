import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton } from "@/components/user-button";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PanelLeftDashedIcon, SparklesIcon, SquarePenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { getUser } = getKindeServerSession();

  const kindeUser = await getUser();
  if (!kindeUser) redirect("/landing");

  return (
    <div className="flex h-screen">
      <div className="w-[260px]">
        <nav className="flex h-full w-full flex-col p-4">
          <div className="flex h-[60px] items-center justify-between">
            <Button variant="ghost" size="icon">
              <PanelLeftDashedIcon />
            </Button>

            <Button variant="ghost" size="icon">
              <SquarePenIcon />
            </Button>
          </div>

          <div className="relative -mr-2 mt-5 flex flex-1 flex-col gap-y-2 overflow-y-auto overflow-x-hidden pr-2 text-sm">
            {Array.from({ length: 10 }).map((_, i) => (
              <Link
                href={`/c/66bec8d10566181c1e3f9d47`}
                key={i}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start overflow-hidden whitespace-nowrap rounded",
                )}
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </span>
              </Link>
            ))}
          </div>

          <div
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex cursor-pointer items-center justify-start gap-x-2 rounded p-0 px-4 py-2 text-sm",
            )}
          >
            <SparklesIcon />

            <div className="flex flex-col">
              <span>Upgrade plan</span>
              <span className="text-xs opacity-50">Get KhatGPT Plus</span>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex flex-1 flex-col">
        <header className="mb-1.5 flex h-14 items-center justify-between px-4 py-2">
          <Logo />
          <UserButton user={kindeUser} />
        </header>

        <main className="h-[calc(100vh-4rem)] flex-1">{children}</main>
      </div>
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
        className="size-8 object-cover"
      />
      <h2 className="text-2xl">KhatGPT</h2>
    </Link>
  );
};

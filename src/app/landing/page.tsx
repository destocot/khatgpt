import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="h-screen px-16 py-4">
      <main className="relative flex h-full items-center gap-x-24 overflow-hidden">
        <img
          src="/orbital.png"
          alt="orbital"
          className="animate-aniorbital absolute bottom-0 left-0 -z-10 opacity-5"
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
          <h1 className="bg-gradient-to-r from-primary to-gray-400 bg-clip-text text-9xl text-transparent">
            KhatGPT
          </h1>

          <h2>Supercharge your creativity and productivity</h2>

          <p className="max-w-prose text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eum
            dolorem? Vitae et natus soluta quo, alias maiores omnis. Eaque
            similique id culpa suscipit facere ipsam enim explicabo aspernatur
            minus?
          </p>

          <Link href="#" className={buttonVariants()}>
            Get Started
          </Link>
        </div>

        <div className="flex h-full flex-1 items-center justify-center">
          <div className="relative flex h-1/2 w-4/5 items-center justify-center rounded-md bg-primary/5">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-md">
              <div className="animate-anibot-bg h-full w-[200%] bg-[url('/bg.png')] bg-[auto_100%] opacity-20" />
            </div>
            <img
              src="bot.png"
              alt="bot"
              className="animate-anibot h-full w-full object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

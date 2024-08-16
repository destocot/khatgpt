import Link from "next/link";
import { Typewriter } from "./_components/typewriter";
import { GetStarted } from "./_components/get-started";

export default function LandingPage() {
  return (
    <div className="h-screen px-16 py-4">
      <main className="relative flex h-full flex-col items-center gap-24 overflow-hidden pt-12 lg:flex-row">
        <img
          src="/orbital.png"
          alt="orbital"
          className="absolute bottom-0 left-0 -z-10 animate-aniorbital opacity-5"
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
          <h1 className="bg-gradient-to-r from-primary to-gray-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent lg:text-9xl">
            KhatGPT
          </h1>

          <h2>Supercharge your creativity and productivity</h2>

          <p className="max-w-prose text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eum
            dolorem? Vitae et natus soluta quo, alias maiores omnis. Eaque
            similique id culpa suscipit facere ipsam enim explicabo aspernatur
            minus?
          </p>

          <GetStarted />
        </div>

        <div className="flex w-full flex-1 justify-center lg:h-full lg:items-center">
          <div className="relative flex h-1/2 w-4/5 items-center justify-center rounded-md bg-primary/[0.02]">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-md">
              <div className="h-full w-[200%] animate-anibot-bg bg-[url('/bg.png')] bg-[auto_100%] opacity-20" />
            </div>

            <img
              src="bot.png"
              alt="bot"
              className="h-full w-full animate-anibot object-contain"
            />

            <Typewriter />
          </div>
        </div>
      </main>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-y-4">
        <img src="logo.png" alt="logo" className="size-10" />
        <div className="flex gap-x-2 text-xs opacity-50">
          <Link href="#">Terms of Service</Link>|
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

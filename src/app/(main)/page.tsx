import { Button } from "@/components/ui/button";
import {
  ArrowUpIcon,
  GraduationCapIcon,
  ImageIcon,
  PaperclipIcon,
  PenIcon,
  SquareTerminalIcon,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex w-3/5 flex-1 flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-4 font-bold">
          <Image
            src="/logo.png"
            alt="KhatGPT"
            width={400}
            height={400}
            className="size-16 object-cover"
          />
          <h1 className="text-6xl">KhatGPT</h1>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-x-4">
          <div className="flex cursor-pointer flex-col gap-y-2 rounded-sm border bg-card p-4 text-sm font-medium transition-colors hover:bg-card/80">
            <ImageIcon className="size-4 text-cyan-500" />
            Create a Renaissance-style painting
          </div>

          <div className="flex cursor-pointer flex-col gap-y-2 rounded-sm border bg-card p-4 text-sm font-medium transition-colors hover:bg-card/80">
            <GraduationCapIcon className="size-4 text-sky-500" />
            Quiz me on world capitals
          </div>

          <div className="flex cursor-pointer flex-col gap-y-2 rounded-sm border bg-card p-4 text-sm font-medium transition-colors hover:bg-card/80">
            <SquareTerminalIcon className="size-4 text-red-500" />
            Make me a personal webpage
          </div>

          <div className="flex cursor-pointer flex-col gap-y-2 rounded-sm border bg-card p-4 text-sm font-medium transition-colors hover:bg-card/80">
            <PenIcon className="size-4 text-purple-500" />
            Content calendar for TikTok
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto flex max-w-3xl flex-1">
          <form className="flex w-full items-center rounded-full bg-card px-4 py-2">
            <Button size="icon" variant="ghost">
              <PaperclipIcon className="mr-2 size-6" />
            </Button>

            <input
              type="text"
              placeholder="Message KhatGPT"
              className="flex-1 bg-transparent"
            />
            <Button size="icon" variant="ghost">
              <ArrowUpIcon className="size-8" />
            </Button>
          </form>
        </div>

        <div className="p-2 text-center text-xs">
          <span className="opacity-50">
            KhatGPT can make mistakes. Check important info.
          </span>
        </div>
      </div>
    </div>
  );
}

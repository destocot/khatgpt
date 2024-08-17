import { cn } from "@/lib/utils";
import { ScrollToDiv } from " /_components/scroll-to-div";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, PaperclipIcon } from "lucide-react";

type PageProps = { params: { chatId: string } };

const messages = Array.from({ length: 20 });

export default function ChatIDPage({ params }: PageProps) {
  const chatId = params.chatId;

  return (
    <div className="flex h-full flex-col">
      <Top />
      <Bottom />
    </div>
  );
}

const Top = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full">
        <div className="relative h-full">
          <div className="h-full w-full overflow-y-auto">
            <div className="mx-auto flex flex-col pb-12 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
              {messages.map((_, i) => (
                <Fragment key={i}>
                  <UserMessage>
                    <p>is baking cooking</p>
                  </UserMessage>
                  <BotMessage>
                    <p>
                      YBaking is a method of cooking that involves preparing
                      food by using dry heat, typically in an oven. While
                      cooking is a broad term that encompasses various methods
                      of preparing food (such as boiling, frying, grilling, and
                      more), baking specifically refers to the process of
                      cooking food through prolonged exposure to heat in an
                      enclosed space. Examples of baked goods include bread,
                      cakes, pastries, and cookies.
                    </p>
                  </BotMessage>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-[18px] md:px-5">
      <div className="flex w-full min-w-0 justify-end">
        <div className="rounded-3xl bg-secondary px-5 py-2.5">{children}</div>
      </div>
    </div>
  );
};

const BotMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-x-4 px-3 py-[18px] md:px-5">
      <div className="flex-shrink-0">
        <img
          src="/bot.png"
          alt="bot"
          className="size-8 rounded-full ring-2 ring-ring"
        />
      </div>

      <div className="flex w-full min-w-0 px-5 py-2.5">{children}</div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="w-full">
      <div className="mx-auto px-3 md:px-5">
        <div className="mx-auto md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
          <form className="w-full">
            <div className="flex w-full items-center gap-x-1.5 rounded-[26px] bg-secondary p-1.5">
              <Button size="icon" variant="ghost">
                <PaperclipIcon />
              </Button>

              <div className="flex min-w-0 flex-1 flex-col">
                <textarea
                  placeholder="Message KhatGPT"
                  rows={1}
                  tabIndex={0}
                  dir="auto"
                  className="h-10 resize-none overflow-y-hidden border-0 bg-transparent focus:ring-0 focus-visible:ring-0"
                ></textarea>
              </div>

              <Button size="icon" variant="ghost">
                <ArrowUpIcon />
              </Button>
            </div>
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
};

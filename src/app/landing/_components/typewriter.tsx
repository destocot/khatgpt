"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Typewriter = () => {
  const [status, setStatus] = useState<"human" | "bot">("human");

  const src = status === "human" ? "/avatar-landing.png" : "/bot.png";

  return (
    <div className="absolute -bottom-8 -right-8 hidden rounded-sm bg-gray-900 p-4 lg:flex lg:items-center lg:gap-x-3">
      <img
        src={src}
        alt="bot"
        className="size-8 shrink-0 rounded-full border-transparent object-cover ring-2 ring-ring focus-within:border-opacity-100"
      />
      <TypeAnimation
        sequence={[
          "I'm thinking about a vacation.",
          2000,
          () => {
            setStatus("bot");
          },
          "Sounds great! Culture or adventure?",
          2000,
          () => {
            setStatus("human");
          },
          "Definitely culture.",
          2000,
          () => {
            setStatus("bot");
          },
          "Paris or Kyoto would be perfect. Want more details on either?",
          2000,
          () => {
            setStatus("human");
          },
        ]}
        className="line-clamp-1"
        wrapper="span"
        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation
      />
    </div>
  );
};

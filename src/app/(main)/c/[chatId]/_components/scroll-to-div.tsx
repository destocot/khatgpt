"use client";

import { useEffect, useRef } from "react";

export const ScrollToDiv = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return <div ref={ref} />;
};

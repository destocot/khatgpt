"use client";

import { buttonVariants } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export const GetStarted = () => {
  const { isAuthenticated } = useKindeAuth();
  const href = isAuthenticated ? "/" : "/api/auth/login";

  return (
    <Link href={href} className={buttonVariants()}>
      Get Started
    </Link>
  );
};

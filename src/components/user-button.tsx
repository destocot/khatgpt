"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import { LogOutIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

type UserButtonProps = {
  className?: React.HTMLAttributes<HTMLButtonElement>["className"];
  user: KindeUser;
};

export const UserButton = ({ className, user }: UserButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("z-50 flex-none rounded-full", className)}>
          <UserAvatar avatarUrl={user.picture} size={40} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="rounded-2xl px-0 py-6" align="end">
        <DropdownMenuItem className="mb-2 flex items-center gap-x-4 px-6 focus:bg-transparent">
          <UserAvatar avatarUrl={user.picture} size={40} />
          <div className="flex flex-col">
            <span className="font-bold">
              {user.given_name} {user.family_name}
            </span>
            <span className="opacity-50">{user.email}</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex cursor-pointer gap-x-4 px-6 py-3"
          asChild
        >
          <LogoutLink className="opacity-50">
            <LogOutIcon className="size-4" />
            Sign out
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

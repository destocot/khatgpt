import { cn } from "@/lib/utils";
import Image from "next/image";

type UserAvatarProps = {
  avatarUrl: string | null;
  size?: number;
  className?: React.HTMLAttributes<HTMLImageElement>["className"];
};

export const UserAvatar = ({ avatarUrl, size, className }: UserAvatarProps) => {
  return (
    <Image
      src={avatarUrl ?? "/avatar-placeholder.png"}
      alt="avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
};

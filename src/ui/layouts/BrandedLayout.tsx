import { PropsWithChildren } from "react";
import { Avatar } from "../Avatar";
import { ThemeToggle } from "../ThemeToggle";

export function BrandedLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white dark:bg-zinc-950 w-full h-full flex justify-center items-center flex-col relative">
      <div className="absolute top-3 left-3 flex flex-row gap-3 items-center">
        <Avatar />
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}

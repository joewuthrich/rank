import { PropsWithChildren } from "react";
import { Avatar } from "../Avatar";
import { ThemeToggle } from "../ThemeToggle";

export function BrandedLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background w-full h-full flex justify-center items-center flex-col relative">
      <div className="absolute top-3 left-3 z-50">
        <Avatar />
      </div>
      <div className="absolute top-3 right-3 z-50">
        <ThemeToggle />
      </div>
      <div className="w-[300px] sm:w-[500px]">{children}</div>
    </div>
  );
}

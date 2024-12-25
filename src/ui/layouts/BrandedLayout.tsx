import { PropsWithChildren } from "react";
import { Avatar } from "../Avatar";
import { ThemeToggle } from "../ThemeToggle";
import { SmallText } from "../typography/Typography";

export function BrandedLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background w-full h-full flex justify-center items-center flex-col relative min-h-dvh">
      <div className="absolute top-3 left-3 z-50">
        <Avatar />
      </div>
      <div className="absolute top-3 right-3 z-50">
        <ThemeToggle />
      </div>
      <div className="w-[300px] h-full sm:w-[500px] py-[76px]">{children}</div>
      <div className="absolute bottom-3 text-muted-foreground">
        <SmallText>Made by Joe Wuthrich on Christmas Day, 2024</SmallText>
      </div>
    </div>
  );
}

import { PropsWithChildren } from "react";
import { MeAvatar } from "../MeAvatar";

export function BrandedLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white w-full h-full flex justify-center items-center flex-col relative">
      <div className="absolute top-3 left-3">
        <MeAvatar />
      </div>
      {children}
    </div>
  );
}

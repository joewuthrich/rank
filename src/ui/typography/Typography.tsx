import { PropsWithChildren } from "react";
import { Textfit } from "react-textfitfix";

export function BodyText({ children }: PropsWithChildren) {
  return <p className="leading-7">{children}</p>;
}

export function TypographyH1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyScaled({ children }: PropsWithChildren) {
  return (
    <Textfit
      mode="multi"
      className="h-full w-full flex justify-center font-bold items-center"
    >
      {children}
    </Textfit>
  );
}

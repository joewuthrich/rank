import { PropsWithChildren } from "react";

export function BodyText({ children }: PropsWithChildren) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyH1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

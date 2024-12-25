import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router";

export function InnerPageLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-0 left-0 h-[72px] flex justify-center items-center w-full">
        <Button variant="link" onClick={() => navigate("/")}>
          Return to start
        </Button>
      </div>
      {children}
    </>
  );
}

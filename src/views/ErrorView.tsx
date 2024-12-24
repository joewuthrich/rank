import { useNavigate } from "react-router";
import { Button } from "../ui/Button";
import { TypographyH1 } from "../ui/typography/Typography";

export function ErrorView() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-full">
      <TypographyH1>Page Not Found</TypographyH1>
      <Button variant={"outline"} onClick={() => navigate("/")}>
        Return To Selection
      </Button>
    </div>
  );
}

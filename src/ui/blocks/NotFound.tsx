import { useNavigate } from "react-router";
import { Button } from "../../../components/ui/button";
import { TypographyH1 } from "../typography/Typography";

export function NotFound() {
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

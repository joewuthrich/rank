import { useNavigate, useSearchParams } from "react-router";
import { BodyText, TypographyH1 } from "../ui/typography/Typography";
import { useMemo } from "react";
import LZString from "lz-string";
import { ErrorView } from "./ErrorView";
import { Button } from "../ui/Button";
import { ArrowRight, Link } from "lucide-react";
import { copyToClipboard } from "../lib/copyToClipboard";

export function ResultsView() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const items = useMemo(() => {
    const list = params.get("list");
    if (!list) return null;

    const text = LZString.decompressFromEncodedURIComponent(list);
    if (!text) return null;

    try {
      return JSON.parse(text).reverse();
    } catch {
      return null;
    }
  }, [params]);

  if (items == null || !Array.isArray(items) || items.length === 0) {
    return <ErrorView />;
  }

  const startChoosing = () => {
    const compressed = LZString.compressToEncodedURIComponent(
      JSON.stringify(items)
    );

    navigate(`/rank?list=${compressed}`);
  };

  return (
    <>
      <TypographyH1>Results</TypographyH1>
      <BodyText>{items.join(", ")}</BodyText>
      <div className="flex flex-row gap-2 justify-stretch relative">
        <Button
          className="flex-1"
          variant={"outline"}
          onClick={() => copyToClipboard(window.location.href)}
        >
          <Link /> Share List
        </Button>
        <Button className="flex-1" onClick={startChoosing}>
          <ArrowRight /> Rank Again
        </Button>
      </div>
    </>
  );
}

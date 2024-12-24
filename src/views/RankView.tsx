import { useSearchParams } from "react-router";
import { BodyText, TypographyH1 } from "../ui/typography/Typography";
import { ErrorView } from "./ErrorView";
import LZString from "lz-string";
import { useMemo } from "react";
import { Progress } from "../ui/progress";

export function RankView() {
  const [params] = useSearchParams();

  const items = useMemo(() => {
    const list = params.get("list");
    if (!list) return null;

    const text = LZString.decompressFromEncodedURIComponent(list);
    if (!text) return null;

    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }, [params]);

  if (items == null || !Array.isArray(items) || items.length === 0) {
    return <ErrorView />;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <TypographyH1>Rank</TypographyH1>
      <BodyText>{items}</BodyText>
      <Progress value={0} />
    </div>
  );
}

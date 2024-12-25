import { useNavigate, useSearchParams } from "react-router";
import { TypographyH1 } from "../ui/typography/Typography";
import { useMemo } from "react";
import LZString from "lz-string";
import { ErrorView } from "./ErrorView";
import { Button } from "../ui/Button";
import { ArrowRight, Link } from "lucide-react";
import { copyToClipboard } from "../lib/copyToClipboard";
import { InnerPageLayout } from "../ui/layouts/InnerPageLayout";
import Confetti from "react-confetti";
import useWindowSize from "../lib/useWindowSize";
import { DataTable } from "../ui/table/ResultsTable";
import { columns } from "../ui/table/columns";

export function ResultsView() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const self = !!params.get("self");

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
    <InnerPageLayout>
      {self && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          colors={["#FFA500", "#FFC0CB"]}
        />
      )}
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-center">
          <TypographyH1>Results</TypographyH1>
        </div>
        <DataTable
          columns={columns}
          data={items.map((item, index) => ({ rank: index + 1, item }))}
        />
        <div className="flex flex-row gap-2 justify-stretch relative">
          <Button
            className="flex-1"
            variant={"outline"}
            onClick={() => {
              const url = window.location.href.split("&self")[0];
              copyToClipboard(url);
            }}
          >
            <Link /> Share List
          </Button>
          <Button className="flex-1" onClick={startChoosing}>
            <ArrowRight /> Rank Again
          </Button>
        </div>
      </div>
    </InnerPageLayout>
  );
}

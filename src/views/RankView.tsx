import { useSearchParams } from "react-router";
import { ErrorView } from "./ErrorView";
import LZString from "lz-string";
import { useMemo, useState } from "react";
import { Progress } from "../ui/Progress";
import { PairwiseSorter } from "../ui/blocks/PariwiseSorter";
import { InnerPageLayout } from "../ui/layouts/InnerPageLayout";

export function RankView() {
  const [params] = useSearchParams();
  const [progress, setProgress] = useState<number>(0);

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

  const updateProgress = ({ sortedCount }: { sortedCount: number }) => {
    const newPercentage = (sortedCount / items.length) * 100;

    setProgress(newPercentage);
  };

  return (
    <InnerPageLayout>
      <div className="flex flex-col gap-4 items-center">
        <PairwiseSorter
          initialItems={shuffleArray(items)}
          updateProgress={updateProgress}
        />
        <Progress value={progress} />
      </div>
    </InnerPageLayout>
  );
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

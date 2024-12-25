import { useState, useEffect } from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router";
import LZString from "lz-string";
import { TypographyScaled } from "../typography/Typography";

export function PairwiseSorter({
  initialItems,
  updateProgress,
}: {
  initialItems: string[];
  updateProgress: (sortedCount: { sortedCount: number }) => void;
}) {
  const navigate = useNavigate();

  const [sortedArray, setSortedArray] = useState<string[]>([...initialItems]);
  const [index, setIndex] = useState<number>(1);

  const [left, setLeft] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [mid, setMid] = useState<number>(0);

  const [comparing, setComparing] = useState<boolean>(false);

  useEffect(() => {
    if (index >= sortedArray.length) {
      finishSorting();
      return;
    }

    setLeft(0);
    setRight(index - 1);
    setMid(Math.floor((0 + (index - 1)) / 2));
    setComparing(true);

    updateProgress({ sortedCount: index });
  }, [index, sortedArray]);

  const handleSmaller = () => {
    const newRight = mid - 1;
    setRight(newRight);

    if (newRight < left) {
      insertItem(mid);
    } else {
      const newMid = Math.floor((left + newRight) / 2);
      setMid(newMid);
    }
  };

  const handleLarger = () => {
    const newLeft = mid + 1;
    setLeft(newLeft);

    if (newLeft > right) {
      insertItem(newLeft);
    } else {
      const newMid = Math.floor((newLeft + right) / 2);
      setMid(newMid);
    }
  };

  const insertItem = (insertPos: number) => {
    setComparing(false);
    setSortedArray((prevArray) => {
      const arrayCopy = [...prevArray];
      const itemToInsert = arrayCopy[index];

      arrayCopy.splice(index, 1);
      arrayCopy.splice(insertPos, 0, itemToInsert);

      return arrayCopy;
    });

    updateProgress({ sortedCount: index + 1 });
    setIndex((prev) => prev + 1);
  };

  const finishSorting = () => {
    const compressed = LZString.compressToEncodedURIComponent(
      JSON.stringify(sortedArray)
    );

    navigate(`/results?list=${compressed}&self=true`);
  };

  return (
    <div className="flex flex-row gap-2 items-stretch w-full h-[230px]">
      {comparing ? (
        <>
          <Button className="w-[246px] h-full" onClick={handleSmaller}>
            <TypographyScaled>{sortedArray[mid]}</TypographyScaled>
          </Button>
          <Button className="w-[246px] h-full" onClick={handleLarger}>
            <TypographyScaled>{sortedArray[index]}</TypographyScaled>
          </Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

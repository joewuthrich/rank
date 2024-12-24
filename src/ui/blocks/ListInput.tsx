import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { Label } from "../Label";
import { ArrowRight, Link } from "lucide-react";
import { ChangeEvent, useState } from "react";
import LZString from "lz-string";
import { useNavigate } from "react-router";

export function ListInput() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const startChoosing = () => {
    const splitText = text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    const compressed = LZString.compressToEncodedURIComponent(
      JSON.stringify(splitText)
    );
    navigate(`/rank?list=${compressed}`);
  };

  return (
    <div className="grid gap-2 w-[500px]">
      <Label htmlFor="input">
        Enter a list of items separated by new lines
      </Label>
      <Textarea
        id="input"
        placeholder="A list of items separated by new lines."
        className="h-64"
        onChange={handleChange}
      />
      <div className="flex flex-row gap-2 justify-stretch">
        <Button className="flex-1" variant={"outline"}>
          <Link /> Share List
        </Button>
        <Button className="flex-1" onClick={startChoosing}>
          <ArrowRight /> Start Ranking
        </Button>
      </div>
    </div>
  );
}

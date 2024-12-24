import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { ArrowRight, Link } from "lucide-react";
import { ChangeEvent, useState } from "react";

export function ListInput() {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="grid gap-2 w-[500px]">
      <Label htmlFor="input">Enter a list of items</Label>
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
        <Button className="flex-1">
          <ArrowRight /> Start Ranking
        </Button>
      </div>
    </div>
  );
}

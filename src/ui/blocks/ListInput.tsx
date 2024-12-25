import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { Label } from "../Label";
import { AlertCircle, ArrowRight, Link } from "lucide-react";
import { ChangeEvent, useState } from "react";
import LZString from "lz-string";
import { useNavigate } from "react-router";
import { BodyText } from "../typography/Typography";
import { copyToClipboard } from "../../lib/copyToClipboard";

export function ListInput() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setError(false);
  };

  const startChoosing = () => {
    const compressed = getCompressedList();

    if (compressed.length < 1) {
      return;
    }

    navigate(`/rank?list=${compressed}`);
  };

  const getCompressedList = () => {
    const splitText = text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    if (splitText.length < 2) {
      setError(true);
      return "";
    }

    return LZString.compressToEncodedURIComponent(JSON.stringify(splitText));
  };

  const copyLink = () => {
    const compressed = getCompressedList();
    if (compressed.length < 1) {
      return;
    }

    copyToClipboard(`${window.location.origin}/#/rank?list=${compressed}`);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="input">
        Enter a list of items separated by new lines
      </Label>
      <Textarea
        id="input"
        placeholder="A list of items separated by new lines."
        className="h-64 resize-none"
        onChange={handleChange}
      />
      <div className="flex flex-col sm:flex-row gap-2 justify-stretch relative">
        <Button className="flex-1" variant={"outline"} onClick={copyLink}>
          <Link /> Share List
        </Button>
        <Button className="flex-1" onClick={startChoosing}>
          <ArrowRight /> Start Ranking
        </Button>
        {error && (
          <div className="text-red-500 absolute top-full flex flex-row items-center mt-2 gap-2">
            <AlertCircle size={20} />
            <BodyText>Please add at least two options to rank.</BodyText>
          </div>
        )}
      </div>
    </div>
  );
}

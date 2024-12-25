import { toast } from "sonner";
import { X } from "lucide-react";

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);

  toast("Copied link to clipboard", {
    description: "You can now share this link with others.",
    action: {
      label: <X />,
      onClick: () => {},
    },
  });
}

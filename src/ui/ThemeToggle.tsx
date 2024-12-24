import { Moon, Sun } from "lucide-react";

import { Button } from "./Button";
import { useTheme } from "../providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme == "light" && <Sun />}
      {theme == "dark" && <Moon />}
    </Button>
  );
}

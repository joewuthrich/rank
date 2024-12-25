import { BookHeart, Moon, Sun } from "lucide-react";

import { Button } from "./Button";
import { useTheme } from "../providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={(e) => {
        if (e.ctrlKey) {
          setTheme("pink");
          return;
        }

        setTheme(theme == "light" ? "dark" : "light");
      }}
    >
      {theme == "light" && <Sun />}
      {theme == "dark" && <Moon />}
      {theme == "pink" && <BookHeart />}
    </Button>
  );
}

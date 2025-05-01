"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer hover:text-secondary dark:text-white">
      <button className="flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out">
        <Sun className="size-5 hidden dark:block" />{" "}
        <Moon className="size-5 block dark:hidden" />{" "}
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
};

export default ThemeToggler;

"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const SwitchStyle = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const isDarkMode = theme === "dark" ? true : false;
  const setDarkMode = theme === "dark" ? "light" : "dark";
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Switch
      checked={isDarkMode}
      onChange={() => setTheme(setDarkMode)}
      className={`${
        isDarkMode ? "bg-gray-7" : "bg-gray-5"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isDarkMode ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition dark:bg-gray-2`}
      />
    </Switch>
  );
};

"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export const SwitchStyle = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark" ? false : true;
  const setDarkMode = theme === "dark" ? "light" : "dark";

  console.log(systemTheme);

  return (
    <Switch
      checked={isDarkMode}
      onChange={() => setTheme(setDarkMode)}
      className={`${
        isDarkMode ? "bg-gray-2" : "bg-gray-5"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isDarkMode ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

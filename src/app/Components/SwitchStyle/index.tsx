"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export const SwitchStyle = () => {
  const [blackMode, setBlackMode] = useState<boolean>(false);

  return (
    <Switch
      checked={blackMode}
      onChange={setBlackMode}
      className={`${
        blackMode ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          blackMode ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

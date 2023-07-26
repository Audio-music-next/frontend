"use client";

import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const ScrollTop = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ChevronUpIcon className="absolute top-6 md:top-[45%] right-[5%] w-8 h-8 cursor-pointer bg-gray-5 p-1 rounded-radius-1 text-gray-1" />
    </button>
  );
};

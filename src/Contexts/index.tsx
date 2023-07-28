"use client";

import { ReactNode } from "react";
import { RecordingProvider } from "./RecordingContext";
import { PlayerProvider } from "./PlayerContext";
// import ThemeProvider from "./ThemeContext";
import { ThemeProvider } from "next-themes";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <RecordingProvider>
      <PlayerProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </PlayerProvider>
    </RecordingProvider>
  );
};

import { ReactNode } from "react";
import { RecordingProvider } from "./RecordingContext";
import { PlayerProvider } from "./PlayerContext";
import { ThemeProvider } from "next-themes";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <ThemeProvider attribute="class">
      <RecordingProvider>
        <PlayerProvider>{children}</PlayerProvider>
      </RecordingProvider>
    </ThemeProvider>
  );
};

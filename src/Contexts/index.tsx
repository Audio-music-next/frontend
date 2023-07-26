import { ReactNode } from "react";
import { RecordingProvider } from "./RecordingContext";
import { PlayerProvider } from "./PlayerContext";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <RecordingProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </RecordingProvider>
  );
};

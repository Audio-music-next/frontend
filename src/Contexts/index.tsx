import { ReactNode } from "react";
import { RecordingProvider } from "./RecordingContext";

interface iProviders {
  children: ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return <RecordingProvider>{children}</RecordingProvider>;
};

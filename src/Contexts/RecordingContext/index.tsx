"use client";

import React, { ReactNode, createContext, useState } from "react";

interface iRecordingProviderValues {
  isBlackMode: boolean;
  setIsBlackMode: React.Dispatch<React.SetStateAction<boolean>>;
}
interface iRecordingProviderProps {
  children: ReactNode;
}
export interface iRecording {
  id: number;
  audio: string;
  date: string;
  title: string;
}

export const RecordingContext = createContext<iRecordingProviderValues>(
  {} as iRecordingProviderValues
);

export const RecordingProvider = ({ children }: iRecordingProviderProps) => {
  const [isBlackMode, setIsBlackMode] = useState<boolean>(false);

  return (
    <RecordingContext.Provider value={{ isBlackMode, setIsBlackMode }}>
      {children}
    </RecordingContext.Provider>
  );
};

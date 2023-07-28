"use client";

import React, { ReactNode, createContext } from "react";

interface iRecordingProviderValues {}
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
  return (
    <RecordingContext.Provider value={{}}>{children}</RecordingContext.Provider>
  );
};

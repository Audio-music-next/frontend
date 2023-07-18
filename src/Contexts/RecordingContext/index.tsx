"use client";

import { instance } from "@/app/services/axios";
import React, { ReactNode, createContext, useState } from "react";

interface iRecordingProviderValues {
  // recordings: iRecording[];
  // getAllRecordings(): Promise<void>;
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
  const [recordings, setRecordings] = useState<iRecording[]>([]);

  // const getAllRecordings = async (): Promise<void> => {
  //   await instance
  //     .get("recording", {
  //       params: {
  //         _limit: 6,
  //         _page: 1,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setRecordings(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <RecordingContext.Provider value={{}}>{children}</RecordingContext.Provider>
  );
};

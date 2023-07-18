"use client";

import { useContext } from "react";
import { Player } from "../Player";
import { iRecording } from "@/Contexts/RecordingContext";

interface iMusicCard {
  recordings: iRecording[];
}

export const MusicCard = async ({ recordings }: iMusicCard) => {
  return (
    <ul className="flex gap-8 overflow-x-auto w-full justify-start md:justify-center items-center px-[5%] pb-6 md:flex-wrap">
      {recordings.map((recording: iRecording) => (
        <li
          key={recording.id}
          className="relative min-w-[260px] min-h-[280px] flex flex-col items-center justify-end gap-2 rounded-radius-2 bg-random-2 p-4"
        >
          <Player music={recording} />
          <h3 className=" text-gray-5 font-600 text-heading-3">
            {recording.title}
          </h3>
        </li>
      ))}
    </ul>
  );
};

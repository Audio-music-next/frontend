"use client";

import { useContext } from "react";
import { Player } from "../Player";
import { iRecording } from "@/Contexts/RecordingContext";
import { PlayerContext } from "@/Contexts/PlayerContext";

interface iMusicCard {
  recordings: iRecording[];
}

export const MusicCard = ({ recordings }: iMusicCard) => {
  const { updateRecordingSelected } = useContext(PlayerContext);

  return (
    <ul className="flex gap-8 overflow-x-auto w-full justify-start md:justify-center items-center px-[5%] pb-6 md:flex-wrap">
      {recordings.map((recording: iRecording) => (
        <li
          key={recording.id}
          className="min-w-[260px] min-h-[280px]  flex flex-col items-center justify-between gap-2 rounded-radius-2 bg-random-2 p-4"
        >
          <div className="flex justify-center items-center h-[200px]">
            <Player
              recording={recording}
              handlePlay={() => updateRecordingSelected(recording.audio)}
            />
          </div>
          <h4 className="h-[80px] text-center text-gray-5 font-600 text-heading-4">
            {recording.title}
          </h4>
        </li>
      ))}
    </ul>
  );
};

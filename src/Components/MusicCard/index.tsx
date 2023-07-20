"use client";

import { useContext } from "react";
import { Player } from "../Player";
import { iRecording } from "@/Contexts/RecordingContext";
import { PlayerContext } from "@/Contexts/PlayerContext";
import { ProgressAudio } from "../Progress";

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
          className="relative min-w-[260px] min-h-[280px] flex flex-col items-center justify-between gap-2 rounded-radius-1 bg-random-2 p-4 z-40 md:w-[260px] h-[280px] "
        >
          <ProgressAudio recording={recording} />
          <div className="flex justify-center items-center h-[200px] z-20">
            <Player
              recording={recording}
              handlePlay={() => updateRecordingSelected(recording.audio)}
            />
          </div>
          <div className="w-full z-20">
            <h4 className="h-[80px] text-center text-gray-5 font-600 text-heading-4">
              {recording.title}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

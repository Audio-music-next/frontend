import { PlayerContext } from "@/Contexts/PlayerContext";
import { iRecording } from "@/Contexts/RecordingContext";
import { iMusic } from "@/app/constants/musics";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";

interface iPlayerProps {
  recording: iRecording;
  handlePlay: () => void;
}

export const Player = ({ handlePlay }: iPlayerProps) => {
  const {
    recordingPlaying,
    playRecording,
    pauseRecording,
    updateRecordingSelected,
  } = useContext(PlayerContext);

  const PlayerSelect = recordingPlaying ? PauseCircleIcon : PlayCircleIcon;
  const playerCallback = recordingPlaying ? pauseRecording : handlePlay;

  return (
    <React.Fragment>
      <button onClick={playerCallback}>
        <PlayerSelect className="w-14 h-14 text-gray-5 cursor-pointer" />
      </button>
    </React.Fragment>
  );
};

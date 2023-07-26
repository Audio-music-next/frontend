import { PlayerContext } from "@/Contexts/PlayerContext";
import { iRecording } from "@/Contexts/RecordingContext";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";

interface iPlayerProps {
  recording: iRecording;
  handlePlay: () => void;
}

export const Player = ({ recording, handlePlay }: iPlayerProps) => {
  const { recordingPlaying, recordingSelected, pauseRecording } =
    useContext(PlayerContext);

  const recordingIsPlaying =
    recordingPlaying && recordingSelected?.src === recording.audio;

  const PlayerSelect = recordingIsPlaying ? PauseCircleIcon : PlayCircleIcon;
  const playerCallback = recordingIsPlaying ? pauseRecording : handlePlay;

  return (
    <React.Fragment>
      <button onClick={playerCallback}>
        <PlayerSelect className="w-14 h-14 text-gray-5 cursor-pointer" />
      </button>
    </React.Fragment>
  );
};

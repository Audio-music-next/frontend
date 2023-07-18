import { iRecording } from "@/Contexts/RecordingContext";
import { iMusic } from "@/app/constants/musics";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface iPlayerProps {
  music: iRecording;
}

export const Player = ({ music }: iPlayerProps) => {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio(music.audio) : null
  );

  const [playing, setPlaying] = useState<boolean>(false);

  function playMusic() {
    audio?.play();
    setPlaying(true);
  }

  function pauseMusic() {
    audio?.pause();
    setPlaying(false);
  }

  const PlayerSelect = playing ? PauseCircleIcon : PlayCircleIcon;
  const playerCallback = playing ? pauseMusic : playMusic;

  return (
    <React.Fragment>
      <button onClick={playerCallback}>
        <PlayerSelect className="w-14 h-14 absolute top-[30%] text-gray-5 cursor-pointer" />
      </button>
    </React.Fragment>
  );
};

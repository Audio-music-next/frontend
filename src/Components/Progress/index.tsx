import { PlayerContext } from "@/Contexts/PlayerContext";
import { iRecording } from "@/Contexts/RecordingContext";
import { useContext, useEffect, useRef, useState } from "react";

interface iProgressAudio {
  recording: iRecording;
}

export const ProgressAudio = ({ recording }: iProgressAudio) => {
  const { recordingSelected } = useContext(PlayerContext);

  const progressDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recordingSelected?.src !== recording.audio) {
      if (progressDivRef.current?.style) {
        progressDivRef.current.style.width = "0px";
      }
      return;
    }

    function eventTimeUpdate() {
      if (!recordingSelected) {
        return;
      }

      const progress =
        (recordingSelected.currentTime / recordingSelected.duration) * 100;
      const roundProgress = String(Math.round(progress));

      if (progressDivRef.current?.style) {
        const widthProgress = roundProgress === "100" ? "0" : roundProgress;
        progressDivRef.current.style.width = `${widthProgress}%`;
      }
    }

    recordingSelected?.addEventListener("timeupdate", eventTimeUpdate);

    return () => {
      recordingSelected?.removeEventListener("timeupdate", eventTimeUpdate);
    };
  }, [recordingSelected, recording]);

  return (
    <div
      className={`absolute top-0 left-0 bg-random-2 dark:bg-random-3 z-20 h-full min-w-0 ease-in-out rounded-radius-1 overflow-hidden`}
      ref={progressDivRef}
    ></div>
  );
};

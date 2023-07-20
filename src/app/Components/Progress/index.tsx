import { PlayerContext } from "@/Contexts/PlayerContext";
import { iRecording } from "@/Contexts/RecordingContext";
import { useContext, useEffect, useRef } from "react";

interface iProgressAudio {
  recording: iRecording;
}

export const ProgressAudio = ({ recording }: iProgressAudio) => {
  const { recordingSelected } = useContext(PlayerContext);

  const progressDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recordingSelected?.src !== recording.audio) {
      return;
    }

    function eventTimeUpdate() {
      if (!recordingSelected) {
        return;
      }

      const progress =
        (recordingSelected.currentTime / recordingSelected.duration) * 100;
      const roundProgress = String(Math.round(progress));

      console.log(roundProgress);
    }

    recordingSelected?.addEventListener("timeupdate", eventTimeUpdate);

    return () => {
      recordingSelected?.removeEventListener("timeupdate", eventTimeUpdate);
    };
  }, [recordingSelected, recording]);

  return <div ref={progressDivRef}></div>;
};

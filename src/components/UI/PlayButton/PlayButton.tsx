import { FC } from "react";
import "./PlayButton.scss";
import { ReactComponent as PlayIcon } from "@icons/play.svg";
import { ReactComponent as PauseIcon } from "@icons/pause.svg";

interface PlayButtonProps {
  isPlaying: boolean;
  handlePlayPause: () => void;
}

const PlayButton: FC<PlayButtonProps> = ({ isPlaying, handlePlayPause }) => {
  return (
    <button className="play-button" onClick={handlePlayPause}>
      {isPlaying ? (
        <PauseIcon className="play-button__icon" width="10" height="10" />
      ) : (
        <PlayIcon className="play-button__icon" width="10" height="10" />
      )}
    </button>
  );
};

export default PlayButton;

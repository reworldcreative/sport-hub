import Equalizer from "@/components/widgets/Equalizer/Equalizer";
import { FC, useEffect, useRef, useState } from "react";
import "./VideoEqualizer.scss";
import PlayButton from "../PlayButton/PlayButton";

interface VideoEqualizerProps {
  source: string;
  video_width: number;
  video_height: number;
  poster?: string;
  title: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const VideoEqualizer: FC<VideoEqualizerProps> = ({
  source,
  video_width,
  video_height,
  poster,
  title,
  top,
  left,
  right,
  bottom,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const sourceRef = useRef<HTMLAudioElement>(null);
  const sourceRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayPause = () => {
    if (!isLoaded && sourceRef.current) {
      sourceRef.current.src = source;
      sourceRef.current.load();
      sourceRef.current.addEventListener(
        "loadeddata",
        () => {
          setIsLoaded(true);
          sourceRef.current!.play();
        },
        { once: true }
      );
    } else if (isPlaying) {
      if (sourceRef.current) {
        sourceRef.current.pause();
      }
    } else {
      if (sourceRef.current) {
        sourceRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (isPlaying) {
          if (sourceRef.current) {
            sourceRef.current.pause();
          }
          setIsPlaying(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPlaying]);

  const vwWidth = (video_width / 1440) * 100;
  const vwHeight = (video_height / 800) * 100;

  return (
    <div
      ref={containerRef}
      className="video-equalizer"
      style={{
        width: `${vwWidth}vw`,
        height: `${vwHeight}vh`,
        top,
        left,
        right,
        bottom,
      }}
    >
      {/* <audio ref={sourceRef} src="/relax.mp3" crossOrigin="anonymous"></audio> */}

      <video
        className="video-equalizer__container"
        ref={sourceRef}
        // preload="none"
        width="320"
        height="240"
        poster={poster}
      >
        {/* <source src={source} type="video/mp4" /> */}
        {isLoaded && <source src={source} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      <div className="video-equalizer__block">
        <div className="video-equalizer__row">
          <PlayButton isPlaying={isPlaying} handlePlayPause={handlePlayPause} />

          <Equalizer sourceRef={sourceRef} type="static" />
        </div>

        <p className="video-name video-equalizer__name" style={{ fontSize: `${vwWidth * 0.6 + "px"}` }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default VideoEqualizer;

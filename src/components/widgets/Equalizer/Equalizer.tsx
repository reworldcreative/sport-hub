import { FC, useEffect, useRef, useState } from "react";
import { AudioVisualizer, LiveAudioVisualizer } from "react-audio-visualize";
import "./Equalizer.scss";
import poster from "@img/avatars/avatar1.jpg";

const Equalizer: FC = () => {
  // const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const handlePlayPause = () => {
    // if (isPlaying) {
    //   if (audioRef.current) {
    //     audioRef.current.pause();
    //   }
    // } else {
    //   if (audioRef.current) {
    //     audioRef.current.play();
    //   }
    // }

    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const [blob, setBlob] = useState<Blob>();
  const visualizerRef = useRef<HTMLCanvasElement>(null);

  // Функція для завантаження аудіо та встановлення blob
  const loadAudio = async () => {
    try {
      const response = await fetch("/video.mp4");
      const audioBlob = await response.blob();
      setBlob(audioBlob);
    } catch (error) {
      console.error("Помилка завантаження аудіо:", error);
    }
  };

  useEffect(() => {
    loadAudio();

    return () => {
      loadAudio();
    };
  }, []);

  const setupMediaRecorder = async () => {
    try {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioContext.createMediaElementSource(videoElement);
      const destination = audioContext.createMediaStreamDestination();
      source.connect(destination);
      source.connect(audioContext.destination); // Connect to the audio context's destination to actually play sound

      const newMediaRecorder = new MediaRecorder(destination.stream);
      setMediaRecorder(newMediaRecorder);

      // Start recording immediately
      newMediaRecorder.start();
    } catch (error) {
      console.error("Помилка налаштування MediaRecorder:", error);
    }
  };

  const handleStart = async () => {
    await setupMediaRecorder();
    handlePlayPause();
  };

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateCurrentTime = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
      animationFrameId = requestAnimationFrame(updateCurrentTime);
    };

    updateCurrentTime();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div>
      {/* <audio ref={audioRef} src="/relax.mp3" crossOrigin="anonymous"></audio> */}
      <video ref={videoRef} width="320" height="240" poster={poster}>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button> */}
      {blob && (
        <AudioVisualizer
          ref={visualizerRef}
          blob={blob}
          width={300}
          height={70}
          barWidth={5}
          gap={5}
          barColor={"#ffffff"}
          barPlayedColor={"#ad7955"}
          currentTime={currentTime}
        />
      )}

      <button onClick={handleStart}>{isPlaying ? "Pause" : "Play"}</button>

      {mediaRecorder && (
        <div className="equalizer__wrapper">
          <LiveAudioVisualizer
            mediaRecorder={mediaRecorder}
            width={300}
            height={70}
            barWidth={5}
            gap={8}
            barColor={"#ffffff"}
            // maxDecibels={0}
            // minDecibels={-70}
          />
        </div>
      )}
    </div>
  );
};

export default Equalizer;

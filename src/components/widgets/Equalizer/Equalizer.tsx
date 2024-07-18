import { FC, useEffect, useRef, useState } from "react";
import { AudioVisualizer, LiveAudioVisualizer } from "react-audio-visualize";
import "./Equalizer.scss";

interface EqualizerProps {
  sourceRef: React.RefObject<HTMLVideoElement> | React.RefObject<HTMLAudioElement>;
  type: "static" | "dynamic";
}

const Equalizer: FC<EqualizerProps> = ({ sourceRef, type = "static" }) => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [blob, setBlob] = useState<Blob>();
  const visualizerRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaElementSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const destinationRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Функція для завантаження аудіо з відео та встановлення blob
  const loadAudio = async () => {
    if (sourceRef.current) {
      let src = sourceRef.current.currentSrc || sourceRef.current.src;

      // Періодична перевірка наявності src
      const checkSrc = new Promise<string>((resolve) => {
        const interval = setInterval(() => {
          src = sourceRef.current?.currentSrc! || sourceRef.current?.src!;
          if (src) {
            clearInterval(interval);
            resolve(src);
          }
        }, 100);

        setTimeout(() => {
          clearInterval(interval);
        }, 2000);
      });

      try {
        const resolvedSrc = await checkSrc;
        const response = await fetch(resolvedSrc);
        const audioBlob = await response.blob();
        setBlob(audioBlob);
      } catch (error) {
        console.error("Помилка завантаження аудіо:", error);
      }
    } else {
      console.error("Помилка - Video is null");
    }
  };

  const setupAudioContext = async () => {
    try {
      if (!audioContextRef.current) {
        // Створити новий контекст аудіо
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const audioContext = audioContextRef.current;

      if (!mediaElementSourceRef.current) {
        const videoElement = sourceRef.current;
        if (!videoElement) return;

        // Створити новий MediaElementAudioSourceNode
        mediaElementSourceRef.current = audioContext.createMediaElementSource(videoElement);
      }

      if (!destinationRef.current) {
        // Створити новий MediaStreamDestinationNode
        destinationRef.current = audioContext.createMediaStreamDestination();
      }

      const source = mediaElementSourceRef.current;
      const destination = destinationRef.current;

      source.connect(destination);
      source.connect(audioContext.destination); // Підключіть до призначення аудіоконтексту, щоб фактично відтворювати звук

      const newMediaRecorder = new MediaRecorder(destination.stream);
      setMediaRecorder(newMediaRecorder);

      // Розпочати запис відразу
      newMediaRecorder.start();
    } catch (error) {
      console.error("Помилка налаштування AudioContext:", error);
    }
  };

  const handleStart = async () => {
    await setupAudioContext();
  };

  useEffect(() => {
    const videoElement = sourceRef.current;
    if (videoElement && type === "dynamic") {
      const handlePlay = () => handleStart();
      videoElement.addEventListener("play", handlePlay);
      return () => {
        videoElement.removeEventListener("play", handlePlay);
      };
    }
  }, [sourceRef]);

  useEffect(() => {
    type === "static" && loadAudio();
    let animationFrameId: number;

    const updateCurrentTime = () => {
      if (sourceRef.current) {
        setCurrentTime(sourceRef.current.currentTime);
      }
      animationFrameId = requestAnimationFrame(updateCurrentTime);
    };

    updateCurrentTime();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="equalizer__wrapper">
      {type === "static" && blob && (
        <div className="equalizer__block">
          <AudioVisualizer
            ref={visualizerRef}
            blob={blob}
            width={300}
            height={20}
            barWidth={2}
            gap={2}
            barColor={"#ffffff"}
            barPlayedColor={"#ad7955"}
            currentTime={currentTime}
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}

      {type === "dynamic" && mediaRecorder && (
        <div className="equalizer__block equalizer__block-live">
          <LiveAudioVisualizer
            mediaRecorder={mediaRecorder}
            width={300}
            height={20}
            barWidth={2}
            gap={8}
            barColor={"#ffffff"}
            maxDecibels={0}
            minDecibels={-80}
          />
        </div>
      )}
    </div>
  );
};

export default Equalizer;

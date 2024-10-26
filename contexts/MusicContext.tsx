// contexts/MusicContext.tsx
import type React from "react";
import { createContext, useContext, useState, useRef, useEffect } from "react";

interface MusicContextProps {
  isPlaying: boolean;
  setVolume: (value: number) => void;
  togglePlayPause: () => void;
  volume: number;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadError = () => {
      console.error("Audio failed to load.");
    };

    audio.addEventListener("error", handleLoadError);
    return () => {
      audio.removeEventListener("error", handleLoadError);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Volume should be between 0 and 1
    }
  }, [volume]);

  return (
    <MusicContext.Provider
      value={{ isPlaying, setVolume, togglePlayPause, volume }}
    >
      {children}
      <audio ref={audioRef} src="music/sunflower.mp3" />
    </MusicContext.Provider>
  );
};

export const useMusic = (): MusicContextProps => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
};

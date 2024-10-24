import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface MusicPlayerProps {
  volume: number;
}

const MusicPlayer = ({ volume }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Check if audio is loaded before playing
  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadError = () => {
      console.error("Audio failed to load.");
    };
    if (audio) {
      audio.addEventListener("error", handleLoadError);
      return () => {
        audio.removeEventListener("error", handleLoadError);
      };
    }
  }, []);

  // Set the audio volume whenever it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Volume should be between 0 and 1
    }
  }, [volume]);

  return (
    <div className="bg-gray-200 dark:bg-[#34414f] p-2 rounded-lg flex items-center opacity-90 z-1 rounded-xl shadow-lg">
      <img
        alt="Sunflower"
        className="w-10 h-10 rounded-lg mr-2"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIGBwgEBf/EADEQAAEDAwEHAQUJAAAAAAAAAAEAAgMEBRESBgchMUFRcYEiMmGhsRMUNEJicpGy0f/EABoBAQACAwEAAAAAAAAAAAAAAAABBQIDBAb/xAAuEQABAwIDBwMEAwEAAAAAAAABAAIDBBESITEFQVFxgZHwIqHBExRh0UKS4TL/2gAMAwEAAhEDEQA/AKNRE57HRkB7SMgOGeoKgEHRZPY5lsQ1zTVKxQiIREIiERCIrjtm7p152YpKxksX2kkfswyswNI4DDhxBIHZGU124hkfOnt1XoZ9oQNf9vMy7QAOWW7Qjv0KrrabZqqsdQ9ksT2Bp9pr+be3HqPisAS04XarlrdnMZH9zTOxRnuP88IXgrNVC6aKinrZdEDM45uPIeVBNsl1UtHLVOtGNNTuHndTe37urlHQyXGaje6KGMykynQCAM8G8z6qDFI7U2H4z/XtfmrWKGgp5A0uxvvyF+gPueigUwDZpAOQcQsrWyVHJ/2UxFgtT7B1UdVsVaZY8fhmt9RwP0XVDfCFsrDedzuNj3C5tuLHT3iyzMdGDUxMJjPU92+D/i2SRCUWW/Z1YaeXC7NjsiOazTNSvjrXUreLtelvx7Kvxem5UTUrmVJp25m9h8K993GyUFst8FZPE187xqYHD3P1eT8guymhs3G/U+ed117RqhCPs4D6W6nid/nRTHaCobSbN3OaXBa2lk/qQtktgCVWUwxSsH5CyjI7W9zj1OVwDRHuxOLuKapWKvHcbf2VNnmscz8T0zzJCCfeYeYHg/Vb4X2OErdKz6kIkH8cj8frorHqJGRxvfI7DGgk55YXbewuVyNaXENbqVnKpdRybb6+UBkzgfIecYVM83ud1/PdesDGjajG39QaP7YcvhaKtj2TQRvp3tdEWgsI5Y6K5cRYELyjw5ry1+u9QHfbtJHRWUWOnkBqasgzNH5IxxwfJx/C4Z3Xs0Lrgb9OJ0p35D5PQZcyqIWlaEIi77Ncam11rKqjkcyaM6mlpwT3CnDjbh36hdNLUmnkxWuDkQdCOCm143m1lxtX3Z7/AGnDDg2PSXfuPbxjKxMkzhhJ6q3ZU7Lp7zwMOPcDoPO/JV66WR0xlLj9oXatXXKWFrKjdK90n1CfVe9/ypjaN4l0ttCaeKWRvbTpI8jI4eihplYMLTkrh+0aOoGOphvJxGh5+FRa519Rc6ySqq5HPleckuOVlzVVPO6Z+I5cBwXIi0IREoJaQRwIUgkG4RK7BOQMAqXa3CJqxRKB1PJSOKJFCIREIiERKDgY6KbohQiCcqSbokUIhEX/2Q=="
      />
      <div className="flex flex-col justify-between">
        <span className="font-medium text-black dark:text-white">
          Sunflower
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Post Malone / Swae Lee
        </span>
      </div>
      <button
        className="ml-auto text-black mx-4 dark:text-white"
        onClick={togglePlayPause}
      >
        <Icon
          icon={isPlaying ? "ph:pause-fill" : "ph:play-fill"}
          style={{ fontSize: "16px" }}
        />
      </button>
      <audio ref={audioRef} src="music/sunflower.mp3" />
    </div>
  );
};

export default MusicPlayer;

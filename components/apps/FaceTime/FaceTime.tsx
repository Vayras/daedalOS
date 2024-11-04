import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { format } from "date-fns";

// Define interfaces
interface SidebarProps {
  state: FaceTimeState;
  onTake: () => void;
  onSave: () => void;
  onSelect: (src: string) => void;
  images: Record<string, string>;
  onDelete: (date: string) => void;
}

interface SidebarItemProps {
  date: string;
  active: boolean;
  onDelete: (date: string) => void;
}

interface FaceTimeState {
  canSave: boolean;
  curImage: string | null;
  hasWebcamAccess: boolean;
  webcamError: string | null;
}

// Utility functions for localStorage
const LOCAL_STORAGE_KEY = "faceTimeImages";

const getImagesFromLocalStorage = (): Record<string, string> => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

const saveImagesToLocalStorage = (images: Record<string, string>) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(images));
};

const addImageToLocalStorage = (src: string) => {
  const images = getImagesFromLocalStorage();
  const timestamp = Date.now().toString();
  images[timestamp] = src;
  saveImagesToLocalStorage(images);
};

const deleteImageFromLocalStorage = (date: string) => {
  const images = getImagesFromLocalStorage();
  delete images[date];
  saveImagesToLocalStorage(images);
};

// SidebarItem Component
const SidebarItem: React.FC<SidebarItemProps> = ({
  date,
  active,
  onDelete,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`hstack h-16 px-2.5 rounded-md space-x-2 ${
        active ? "bg-[#508041]" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="size-11 rounded-full bg-zinc-600 flex-center">
        <span className="i-ph:link-bold text-2xl text-white/80" />
      </div>

      <div className="text-left">
        <div className="font-medium leading-4 text-white sm">FaceTime Link</div>
        <div className="hstack space-x-1 text-white/60">
          <span className="i-ion:videocam" />
          <span>FaceTime · {format(Number(date), "hh:mm:ss")}</span>
        </div>
      </div>

      <span
        className={`i-maki:cross absolute right-2.5 duration-150 cursor-pointer ${
          hover ? "text-white" : "text-white/60"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(date);
        }}
      />
    </div>
  );
};

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({
  state,
  onTake,
  onSave,
  onSelect,
  images,
  onDelete,
}) => {
  return (
    <div className="absolute w-72 h-full z-10 left-0 top-0 flex flex-col bg-zinc-900/85 backdrop-blur-xl">
      <div className="p-5 space-y-2.5 text-sm">
        <button
          className="flex-center space-x-1 w-full py-1 text-white bg-green-700 rounded-md"
          onClick={onTake}
        >
          <span className="i-ion:ios-videocam text-base" />
          <span>{state.curImage ? "Retake" : "Take a Picture"}</span>
        </button>
        <button
          className={`flex-center space-x-1 w-full py-1 text-white rounded-md bg-stone-500 ${
            !state.canSave ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={!state.canSave}
          onClick={onSave}
        >
          <span
            className={`${
              state.canSave ? "i-mdi:content-save" : "i-mdi:content-save-off"
            } text-base`}
          />
          <span>Save Picture</span>
        </button>
      </div>

      <div className="text-xs flex-1 overflow-y-scroll p-5">
        <div className="px-2.5 text-white/60 mb-2">Recent</div>
        {Object.keys(images)
          .sort((a, b) => Number(b) - Number(a)) // Sort descending
          .map((date) => (
            <button
              className="relative w-full"
              key={date}
              onClick={() => onSelect(images[date])}
            >
              <SidebarItem
                date={date}
                active={state.curImage === images[date]}
                onDelete={onDelete}
              />
            </button>
          ))}
      </div>
    </div>
  );
};

// FaceTime Component
const FaceTime: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [state, setState] = useState<FaceTimeState>({
    canSave: false,
    curImage: null,
    hasWebcamAccess: false,
    webcamError: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load images from localStorage on mount
  useEffect(() => {
    const storedImages = getImagesFromLocalStorage();
    setImages(storedImages);
  }, []);

  const handleTake = () => {
    if (!state.curImage) {
      const src = webcamRef.current?.getScreenshot();
      if (src) {
        setState({ ...state, curImage: src, canSave: true });
      } else {
        console.error("Failed to capture image from webcam.");
      }
    } else {
      setState({ ...state, curImage: null, canSave: false });
    }
  };

  // Handler to save the current picture
  const handleSave = () => {
    if (state.curImage) {
      addImageToLocalStorage(state.curImage);
      setImages(getImagesFromLocalStorage());
      setState({ ...state, curImage: null, canSave: false });
      console.log("Image saved.");
    }
  };

  // Handler to select an image from the sidebar
  const handleSelect = (src: string) => {
    setState({ ...state, curImage: src, canSave: false });
  };

  // Handler to delete an image
  const handleDelete = (date: string) => {
    deleteImageFromLocalStorage(date);
    setImages(getImagesFromLocalStorage());
    if (state.curImage === images[date]) {
      setState({ ...state, curImage: null, canSave: false });
    }
    console.log(`Image with date ${date} deleted.`);
  };

  // Handlers for webcam events
  const handleUserMedia = () => {
    setState((prevState) => ({ ...prevState, hasWebcamAccess: true }));
    setIsLoading(false);
  };

  const handleUserMediaError = (error: Error) => {
    console.error("Webcam error:", error);
    setState((prevState) => ({
      ...prevState,
      webcamError:
        "Unable to access the webcam. Please check your permissions.",
    }));
    setIsLoading(false);
  };

  return (
    <div className="relative h-full">
      <Sidebar
        state={state}
        onTake={handleTake}
        onSave={handleSave}
        onSelect={handleSelect}
        images={images}
        onDelete={handleDelete}
      />

      <div className="h-full bg-zinc-800 flex items-center justify-center">
        {isLoading && !state.webcamError && (
          <div className="text-white">Initializing webcam...</div>
        )}
        {state.webcamError ? (
          <div className="text-red-500">{state.webcamError}</div>
        ) : !state.curImage ? (
          <Webcam
            mirrored={true}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
              aspectRatio: 1.7,
            }}
            className="w-full h-full object-cover"
            onUserMedia={handleUserMedia}
            onUserMediaError={handleUserMediaError}
          />
        ) : (
          state.curImage && (
            <img
              className="w-full h-full object-cover"
              src={state.curImage}
              alt="Captured"
            />
          )
        )}
      </div>
    </div>
  );
};

export default FaceTime;

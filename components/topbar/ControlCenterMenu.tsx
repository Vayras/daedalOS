import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import MusicPlayer from "components/topbar/MusicPlayer";
import { FullWidthSlider } from "components/topbar/Slider";
import { useClickOutside } from "hooks/useClickOutside";

interface ControlCenterProps {
  btnRef: React.RefObject<HTMLDivElement>;
  toggleControlCenter: () => void;
}

const ControlCenter = ({
  toggleControlCenter,
  btnRef,
}: ControlCenterProps): React.JSX.Element => {
  const controlCenterRef = useRef<HTMLDivElement>(null);

  useClickOutside(controlCenterRef, toggleControlCenter, [btnRef]);

  const [dark, setDark] = useState(false);
  const [brightness, setBrightness] = useState(70);
  const [wifi, setWifi] = useState(true);
  const [volume, setVolume] = useState(70);
  const [fullScreen, setFullScreen] = useState(false);
  const [bluetooth, setBluetooth] = useState(true);
  const [airdrop, setAirdrop] = useState(true);

  const toggleDark = (): void => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  const handleBrightnessChange = (value: number): void => {
    setBrightness(value);
    document.documentElement.style.filter = `brightness(${value}%)`;
  };

  const handleVolumeChange = (value: number): void => {
    setVolume(value);
  };

  const toggleFullScreen = (): void => {
    setFullScreen(!fullScreen);
    if (fullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div
      ref={controlCenterRef}
      className="min-w-[330px] bg-[rgba(224,219,218,0.75)] dark:bg-[rgba(34,49,71,0.5)] p-4 rounded-xl shadow-md absolute top-12 right-2"
    >
      {/* Network Section */}
      <div className="flex items-center justify-between mb-1 gap-2">
        <div className="dark:bg-[#2e3c4b] bg-gray-200 opacity-90 z-1 rounded-xl shadow-lg row-span-2 col-span-2 p-2 flex flex-col justify-around min-h-[148px] w-[137px]">
          {/* Wi-Fi Toggle */}
          <button
            aria-label="Toggle Wi-Fi"
            className="flex items-center space-x-2"
            onClick={() => setWifi(!wifi)}
            type="button"
          >
            <div
              className={
                wifi
                  ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8"
                  : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"
              }
            >
              <Icon icon="material-symbols:wifi" style={{ fontSize: "16px" }} />
            </div>
            <div className="pt-0.5 text-left">
              <div className="font-medium leading-4 text-black dark:text-white">
                Wi-Fi
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {wifi ? "Home" : "Off"}
              </div>
            </div>
          </button>

          {/* Bluetooth Toggle */}
          <button
            aria-label="Toggle Bluetooth"
            className="flex items-center space-x-2"
            onClick={() => setBluetooth(!bluetooth)}
            type="button"
          >
            <div
              className={
                bluetooth
                  ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8"
                  : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"
              }
            >
              <Icon icon="charm:bluetooth" style={{ fontSize: "16px" }} />
            </div>
            <div className="pt-0.5 text-left">
              <div className="font-medium leading-4 text-black dark:text-white">
                Bluetooth
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {bluetooth ? "On" : "Off"}
              </div>
            </div>
          </button>

          {/* AirDrop Toggle */}
          <button
            aria-label="Toggle AirDrop"
            className="flex items-center space-x-2"
            onClick={() => setAirdrop(!airdrop)}
            type="button"
          >
            <div
              className={
                airdrop
                  ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8"
                  : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"
              }
            >
              <Icon
                icon="material-symbols:rss-feed-rounded"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="pt-0.5 text-left">
              <div className="font-medium leading-4 text-black dark:text-white">
                AirDrop
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {airdrop ? "Contacts Only" : "Off"}
              </div>
            </div>
          </button>
        </div>

        {/* Other Controls */}
        <div className="flex flex-col items-center min-h-[152px] gap-1 text-black">
          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            className="flex justify-center items-center space-x-2 w-full bg-gray-200 dark:bg-[#34414f] rounded-xl shadow-lg backdrop-blur-2xl min-h-[75px] max-w-60"
            onClick={toggleDark}
            type="button"
          >
            <div
              className={
                dark
                  ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8"
                  : "bg-gray-300 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"
              }
            >
              {dark ? <Icon icon="ion:moon" /> : <Icon icon="ion:sunny" />}
            </div>
            <span className="font-medium text-black dark:text-white">
              {dark ? "Dark Mode" : "Light Mode"}
            </span>
          </button>

          {/* Additional Controls */}
          <div className="flex gap-2">
            {/* Keyboard Brightness */}
            <button
              aria-label="Adjust Keyboard Brightness"
              className="max-w-[72px] max-h-[72px] flex flex-col items-center justify-center text-center bg-gray-200 dark:bg-[#34414f] dark:text-white rounded-xl shadow-lg backdrop-blur-2xl py-2 px-6"
              type="button"
            >
              <Icon icon="bi:brightness-alt-high" />
              <span className="text-xs">Keyboard Brightness</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              aria-label={
                fullScreen ? "Exit Fullscreen Mode" : "Enter Fullscreen Mode"
              }
              className="max-w-[72px] max-h-[72px] flex flex-col items-center justify-center text-center bg-gray-200 dark:bg-[#34414f] dark:text-white rounded-xl shadow-lg backdrop-blur-2xl py-2 px-6"
              onClick={toggleFullScreen}
              type="button"
            >
              <Icon icon="material-symbols-light:fullscreen" />
              <span className="text-xs">
                {fullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <FullWidthSlider
        handleChange={handleBrightnessChange}
        icon="sun"
        minimum={30}
        text="Display"
        value={brightness}
      />

      <FullWidthSlider
        handleChange={handleVolumeChange}
        icon="volume-2"
        minimum={0}
        text="Volume"
        value={volume}
      />

      {/* Music Player */}
      <MusicPlayer volume={volume / 100} />
    </div>
  );
};

export default ControlCenter;

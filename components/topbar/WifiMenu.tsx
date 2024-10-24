import React, { useRef } from "react";
import { useClickOutside } from "hooks/useClickOutside";

interface WifiMenuProps {
  btnRef: React.RefObject<HTMLDivElement>;
  setWifiEnabled: (enabled: boolean) => void;
  toggleWifiMenu: () => void;
  wifiEnabled: boolean;
}

export default function WifiMenu({
  toggleWifiMenu,
  btnRef,
  wifiEnabled,
  setWifiEnabled,
}: WifiMenuProps) {
  const wifiRef = useRef<HTMLDivElement>(null);

  useClickOutside(wifiRef, toggleWifiMenu, [btnRef]);

  const handleToggle = () => {
    setWifiEnabled((prev) => !prev); // Toggle the Wi-Fi state
  };

  return (
    <div
      ref={wifiRef}
      className="absolute top-9 text-black bg-gray-200 opacity-95 border border-gray-500 rounded-lg shadow-md shadow-black dark:shadow-black flex flex-row justify-center items-center gap-44 h-11 w-80 max-w-full right-0 sm:right-2 px-2 py-0.5"
    >
      <div className="px-2.5 font-medium">Wi-Fi</div>
      <div className="px-2.5">
        <label className="relative inline-block h-[22px] w-[38px]">
          <input
            checked={wifiEnabled} // Bind the checkbox to the state
            className="h-0 w-0 opacity-0"
            onChange={handleToggle} // Call handleToggle on change
            type="checkbox"
          />
          <span
            className={`absolute rounded-full inset-0 cursor-pointer duration-300 before:absolute before:rounded-full before:bottom-0.5 before:left-0.5 before:h-[18px] before:w-[18px] before:duration-300 ${
              wifiEnabled
                ? "bg-blue-500 before:translate-x-[16px]" // Change background and move the circle if checked
                : "bg-gray-400/50"
            } before:bg-white`}
          />
        </label>
      </div>
    </div>
  );
}

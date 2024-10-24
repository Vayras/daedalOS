import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import ControlCenter from "components/topbar/ControlCenterMenu";
import SpotlightSearch from "components/topbar/spotlight";
import WifiMenu from "components/topbar/WifiMenu";
import AppleMenu from "components/topbar/AppleMenu";
import Battery from "components/topbar/Battery";

const CCMIcon = ({ size }: { size: number }) => (
  <svg
    fill="currentColor"
    height={size}
    viewBox="0 0 29 29"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
  </svg>
);

interface TopBarState {
  date: Date;
  showAppleMenu: boolean;
  showControlCenter: boolean;
  showSpotLight: boolean;
  showWifiMenu: boolean;
}

export const TopBar = () => {
  const [state, setState] = useState<TopBarState>({
    date: new Date(),
    showAppleMenu: false,
    showControlCenter: false,
    showSpotLight: false,
    showWifiMenu: false,
  });

  const [wifi, setWifi] = useState<boolean>(true);

  const appleBtnRef = useRef<HTMLDivElement>(null);
  const wifiBtnRef = useRef<HTMLDivElement>(null);
  const controlCenterRef = useRef<HTMLDivElement>(null);

  const toggleAppleMenu = (): void => {
    setState((prevState) => ({
      ...prevState,
      showAppleMenu: !prevState.showAppleMenu,
    }));
  };

  const toggleWifiMenu = (): void => {
    setState((prevState) => ({
      ...prevState,
      showWifiMenu: !prevState.showWifiMenu,
    }));
  };

  const toggleShowSpotlight = (): void => {
    setState((prevState) => ({
      ...prevState,
      showSpotLight: !prevState.showSpotLight,
    }));
  };
  const toggleControlCenter = (): void => {
    setState((prevState) => ({
      ...prevState,
      showControlCenter: !prevState.showControlCenter,
    }));
  };

  return (
    <div className="w-full h-8 px-2 fixed top-0 flex justify-between text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition dark:bg-gray-800/50 z-10">
      <div
        ref={appleBtnRef}
        className="flex flex-row items-center md:gap-4 sm:gap-1 h-8 my-auto px-1 cursor-default text-center justify-center"
        onClick={toggleAppleMenu}
      >
        <span className="text-xl hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center">
          <Icon icon="ic:outline-apple" />
        </span>
        <span className="font-semibold hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center">
          Finder
        </span>
      </div>

      {state.showAppleMenu && (
        <AppleMenu
          btnRef={appleBtnRef}
          logout={() => console.log("logout")}
          restart={() => console.log("restart")}
          shut={() => console.log("shut")}
          sleep={() => console.log("sleep")}
          toggleAppleMenu={toggleAppleMenu}
        />
      )}

      {state.showWifiMenu && (
        <WifiMenu
          btnRef={wifiBtnRef}
          setWifiEnabled={setWifi}
          toggleWifiMenu={toggleWifiMenu}
          wifiEnabled={wifi}
        />
      )}

      {state.showSpotLight && <SpotlightSearch />}
      {state.showControlCenter && (
        <ControlCenter
          btnRef={controlCenterRef}
          toggleControlCenter={toggleControlCenter}
        />
      )}
      <div className="flex flex-row items-center md:gap-2  h-8 my-auto px-1 cursor-default text-center">
        <span className="hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center hidden md:block">
          <Battery />
        </span>
        <div
          ref={wifiBtnRef}
          className="md:block hidden"
          onClick={toggleWifiMenu}
        >
          {wifi ? (
            <span className="text-lg hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center">
              <Icon icon="material-symbols:wifi" />
            </span>
          ) : (
            <span className="text-lg hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center">
              <Icon icon="material-symbols:wifi-off" />
            </span>
          )}
        </div>

        <span
          className="text-lg hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center"
          onClick={toggleShowSpotlight}
        >
          <Icon icon="bx:search" />
        </span>
        <span
          className="hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center"
          onClick={toggleControlCenter}
        >
          <CCMIcon size={16} />
        </span>

        <span className="md:gap-2 gap-1 flex hover:bg-gray-100/30 px-1 h-6 cursor-default rounded flex items-center">
          <span>{format(state.date, "eee MMM d")}</span>
          <span>{format(state.date, "h:mm aa")}</span>
        </span>
      </div>
    </div>
  );
};

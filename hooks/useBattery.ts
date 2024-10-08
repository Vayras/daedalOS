import { useEffect, useState } from "react";

// Borrowed from: https://github.com/streamich/react-use/blob/master/src/useBattery.ts
export interface BatteryState {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

interface BatteryManager extends Readonly<BatteryState>, EventTarget {
  onchargingchange: () => void;
  onchargingtimechange: () => void;
  ondischargingtimechange: () => void;
  onlevelchange: () => void;
}

interface NavigatorWithPossibleBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

export interface UseBatteryState extends BatteryState {
  fetched?: boolean;
  isSupported: boolean;
}

const isNavigator = typeof navigator !== "undefined";
const nav: NavigatorWithPossibleBattery | undefined = isNavigator ? navigator : undefined;
const isBatteryApiSupported = nav && typeof nav.getBattery === "function";

const defaultState: BatteryState = {
  charging: false,
  chargingTime: 0,
  dischargingTime: 0,
  level: 1
};

const useBatteryMock = (): UseBatteryState => ({
    isSupported: false,
    ...defaultState
  });

const useBatteryReal = (): UseBatteryState => {
  const [state, setState] = useState<UseBatteryState>({
    fetched: false,
    isSupported: true,
    ...defaultState
  });

  useEffect(() => {
    let isMounted = true;
    let battery: BatteryManager | null = null;

    const handleChange = () => {
      if (!isMounted || !battery) {
        return;
      }
      const newState: UseBatteryState = {
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
        fetched: true,
        isSupported: true,
        level: battery.level
      };
      setState(newState);
    };

    nav!.getBattery!().then((bat: BatteryManager) => {
      if (!isMounted) {
        return;
      }

      battery = bat;
      if (battery?.addEventListener) {
        battery.addEventListener("chargingchange", handleChange);
        battery.addEventListener("chargingtimechange", handleChange);
        battery.addEventListener("dischargingtimechange", handleChange);
        battery.addEventListener("levelchange", handleChange);
      }

      handleChange();
    });

    return () => {
      isMounted = false;
      if (battery?.removeEventListener) {
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange", handleChange);
        battery.removeEventListener("levelchange", handleChange);
      }
    };
  }, []);

  return state;
};

const useBattery = isBatteryApiSupported ? useBatteryReal : useBatteryMock;

export { useBattery };

/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Icon } from "@iconify/react";
import { useBattery } from "hooks/useBattery";

export default function Battery() {
  const batteryState = useBattery();

  const width = () => 0.1 + batteryState.level * 0.96;

  const color = () => {
    if (batteryState.charging) return "bg-green-400";

    if (batteryState.level < 0.2) return "bg-red-500";
    if (batteryState.level < 0.5) return "bg-yellow-500";
    return "bg-white";
  };

  return (
    <div className="flex flex-row space-x-2 items-center">
      <span>{(batteryState.level * 100).toFixed(0)}%</span>
      <div className="relative flex flex-row">
        <span className="text-xl">
          <Icon icon="bi:battery" />
        </span>
        <div
          className={`absolute rounded-[1px] h-2 top-1/2 -mt-1 ml-0.5 left-0 ${color()}`}
          style={{ width: `${width()}rem` }}
        />
        {batteryState.charging && (
          <span className="i-bi:lightning-charge-fill absolute inset-0 m-auto -translate-x-0.5 text-xs" />
        )}
      </div>
    </div>
  );
}

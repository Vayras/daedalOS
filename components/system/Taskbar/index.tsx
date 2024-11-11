/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-array-index-key */
/* eslint-disable import/no-duplicates */
import type React from "react";
import { memo, useCallback, useRef, useEffect, useState } from "react";
import {
  type MotionValue,
  m,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import StyledTaskbar from "components/system/Taskbar/StyledTaskbar";
import useTaskbarContextMenu from "components/system/Taskbar/useTaskbarContextMenu";
import { FOCUSABLE_ELEMENT } from "utils/constants";
import { useProcesses } from "contexts/process";
import LaunchpadModal from "components/system/Taskbar/LaunchpadModal";
import { type ProcessArguments } from "contexts/process/types";

const SUGGESTED = [
  "FileExplorer",
  "Terminal",
  "Messenger",
  "Safari",
  "Paint",
  "AppleCalc",
  "NotesApp",
  "AppleMusic",
  "FaceTime",
];

const SUGGESTEDMOBILE = ["FileExplorer", "Terminal", "NotesApp", "AppleMusic"];

// Generic Icon component
const Icon = ({
  mouseX,
  onClick,
  src,
  alt,
  isMobile,
}: {
  alt: string;
  isMobile: boolean;
  mouseX: MotionValue<number>;
  onClick: () => void;
  src: string;
}): React.JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { width: 0, x: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-150, 0, 150],
    isMobile ? [40, 80, 40] : [50, 100, 50]
  );

  const width = useSpring(widthSync, {
    damping: 12,
    mass: 0.1,
    stiffness: 150,
  });

  return (
    <m.div
      ref={ref}
      className="w-10 cursor-pointer"
      onClick={onClick}
      style={{ width }}
    >
      <img alt={alt} src={src} />
    </m.div>
  );
};

const Taskbar: FC = () => {
  const { open } = useProcesses();
  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaunchpadOpen, setIsLaunchpadOpen] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile devices
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openApp = useCallback(
    (pid: string, args?: ProcessArguments) => {
      open(pid, args);
    },
    [open]
  );

  const toggleLaunchpad = (): void => setIsLaunchpadOpen((prev) => !prev);
  const appList = isMobile ? SUGGESTEDMOBILE : SUGGESTED;

  return (
    <StyledTaskbar {...useTaskbarContextMenu()} {...FOCUSABLE_ELEMENT}>
      <m.div
        className="mx-auto flex h-[60px] md:h-[70px] items-end justify-center gap-4 rounded-2xl px-4 pb-3 backdrop-blur-lg bg-white bg-opacity-20 shadow-lg"
        onMouseLeave={() => mouseX.set(Infinity)}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        style={{ border: "1px solid darkgray" }}
      >
        {/* Launchpad Icon with Dock Effect */}
        <Icon
          alt="Launchpad icon"
          isMobile={isMobile}
          mouseX={mouseX}
          onClick={toggleLaunchpad}
          src="/System/icons/144x144/Launchpad.avif"
        />

        {/* Other App Icons */}
        {appList.map((app, i) => (
          <Icon
            key={i}
            alt={`${app} icon`}
            isMobile={isMobile}
            mouseX={mouseX}
            onClick={() => openApp(app)}
            src={`/System/icons/144x144/${app}.avif`}
          />
        ))}
      </m.div>

      {/* Launchpad Modal */}
      {isLaunchpadOpen && <LaunchpadModal closeModal={toggleLaunchpad} />}
    </StyledTaskbar>
  );
};

export default memo(Taskbar);

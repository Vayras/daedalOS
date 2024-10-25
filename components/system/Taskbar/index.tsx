import { memo, useCallback, useRef } from "react";
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
import { type ProcessArguments } from "contexts/process/types";

const SUGGESTED = ["FileExplorer", "Terminal", "Messenger", "Browser", "Paint"];

const Taskbar: FC = () => {
  const { open } = useProcesses();
  const mouseX = useMotionValue(Infinity);

  const openApp = useCallback(
    (pid: string, args?: ProcessArguments) => {
      open(pid, args);
    },
    [open]
  );

  return (
    <StyledTaskbar {...useTaskbarContextMenu()} {...FOCUSABLE_ELEMENT}>
      <m.div
        className="mx-auto flex h-20 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
        onMouseLeave={() => mouseX.set(Infinity)}
        onMouseMove={(e) => mouseX.set(e.pageX)}
      >
        {SUGGESTED.map((app, i) => (
          <AppIcon
            key={i}
            app={app}
            mouseX={mouseX}
            openApp={() => openApp(app)}
          />
        ))}
      </m.div>
    </StyledTaskbar>
  );
};

const AppIcon = ({
  mouseX,
  openApp,
  app,
}: {
  app: string;
  mouseX: MotionValue;
  openApp: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { width: 0, x: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const width = useSpring(widthSync, {
    damping: 12,
    mass: 0.1,
    stiffness: 150,
  });

  return (
    <m.div ref={ref} className="w-10" onClick={openApp} style={{ width }}>
      <img alt={`${app} icon`} src={`/System/icons/144x144/${app}.avif`} />
    </m.div>
  );
};

export default memo(Taskbar);

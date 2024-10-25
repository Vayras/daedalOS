// Titlebar.tsx
import { memo, useCallback, useRef } from "react";
import Navigation from "components/apps/FileExplorer/Navigation"; // Imported Navigation
import rndDefaults from "components/system/Window/RndWindow/rndDefaults";
import StyledTitlebar from "components/system/Window/Titlebar/StyledTitlebar";
import {
  CloseIcon,
  MaximizeIcon,
  MaximizedIcon,
  MinimizeIcon,
} from "components/system/Window/Titlebar/WindowActionIcons";
import useTitlebarContextMenu from "components/system/Window/Titlebar/useTitlebarContextMenu";
import useWindowActions from "components/system/Window/Titlebar/useWindowActions";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { LONG_PRESS_DELAY_MS, PREVENT_SCROLL } from "utils/constants";
import { haltEvent, label } from "utils/functions";

type TitlebarProps = {
  id: string;
};

const Titlebar: FC<TitlebarProps> = ({ id }) => {
  const {
    processes: { [id]: process },
  } = useProcesses() || {};
  const {
    allowResizing = true,
    componentWindow,
    hideMaximizeButton,
    hideMinimizeButton,
    maximized,
  } = process || {};
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize, onMinimize } = useWindowActions(id);
  const titlebarContextMenu = useTitlebarContextMenu(id);
  const touchStartTimeRef = useRef<number>(0);
  const touchStartPositionRef = useRef<DOMRect>();
  const touchesRef = useRef<TouchList>();
  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for Navigation

  const onTouchEnd = useCallback<React.TouchEventHandler<HTMLButtonElement>>(
    (event) => {
      const { x, y } = componentWindow?.getBoundingClientRect() || {};

      if (
        Date.now() - touchStartTimeRef.current >= LONG_PRESS_DELAY_MS &&
        touchStartPositionRef.current &&
        touchStartPositionRef.current.x === x &&
        touchStartPositionRef.current.y === y
      ) {
        titlebarContextMenu.onContextMenuCapture(
          Object.assign(event, {
            touches: touchesRef.current,
          })
        );
      } else {
        // Trigger the normal button click on touch end if not a long press
        if (event.currentTarget.ariaLabel === "Close") onClose();
        if (event.currentTarget.ariaLabel === "Minimize") onMinimize();
        if (
          event.currentTarget.ariaLabel === "Maximize" ||
          event.currentTarget.ariaLabel === "Restore Down"
        ) {
          onMaximize();
        }
      }
    },
    [componentWindow, titlebarContextMenu, onClose, onMinimize, onMaximize]
  );

  const onTouchStart = useCallback<React.TouchEventHandler<HTMLButtonElement>>(
    ({ touches }) => {
      if (componentWindow) {
        componentWindow.blur();
        componentWindow.focus(PREVENT_SCROLL);
        touchStartTimeRef.current = Date.now();
        touchStartPositionRef.current = componentWindow.getBoundingClientRect();
        touchesRef.current = touches as unknown as TouchList;
      }
    },
    [componentWindow]
  );

  return (
    <StyledTitlebar
      $foreground={isForeground}
      className={rndDefaults.dragHandleClassName}
      onDragOver={haltEvent}
      onDrop={haltEvent}
      {...titlebarContextMenu}
    >
      <div className="flex items-center space-x-2 ml-3">
        {!hideMinimizeButton && (
          <button
            aria-label="Minimize"
            className="w-4 h-4
            bg-yellow-400
            rounded-full
            hover:bg-yellow-500
            focus:outline-none
            flex
            items-center
            justify-center
            group
          "
            onClick={() => onMinimize()}
            onTouchEnd={onTouchEnd}
            onTouchStart={onTouchStart}
            type="button"
            {...label("Minimize")}
          >
            <div className="w-2 h-auto invisible group-hover:visible">
              <MinimizeIcon />
            </div>
          </button>
        )}
        {!hideMaximizeButton && (
          <button
            aria-label={maximized ? "Restore Down" : "Maximize"}
            className={`w-4 h-4 rounded-full flex
            items-center
            justify-center group
            ${allowResizing ? "bg-green-400 hover:bg-green-500" : "bg-gray-500 cursor-not-allowed"}`}
            disabled={!allowResizing}
            onClick={onMaximize}
            onTouchEnd={onTouchEnd}
            onTouchStart={onTouchStart}
            type="button"
            {...label(maximized ? "Restore Down" : "Maximize")}
          >
            <div className="w-2 h-auto invisible group-hover:visible">
              {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
            </div>
          </button>
        )}
        <button
          aria-label="Close"
          className="w-4 h-4 bg-red-400 rounded-full
          hover:bg-red-500 focus:outline-none flex
          items-center
          justify-center group"
          onClick={onClose}
          onTouchEnd={onTouchEnd}
          onTouchStart={onTouchStart}
          type="button"
          {...label("Close")}
        >
          <div className="w-1 h-auto invisible group-hover:visible">
            <CloseIcon />
          </div>
        </button>
      </div>

      {/* Integrated Navigation Component */}
      <Navigation ref={inputRef} hideSearch={false} id={id} />
    </StyledTitlebar>
  );
};

export default memo(Titlebar);

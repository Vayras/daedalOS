import { memo, useCallback, useRef } from "react";
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
import { useMenu } from "contexts/menu";
import { type MenuState } from "contexts/menu/useMenuContextState";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import useDoubleClick from "hooks/useDoubleClick";
import Button from "styles/common/Button";
import Icon from "styles/common/Icon";
import { LONG_PRESS_DELAY_MS, PREVENT_SCROLL } from "utils/constants";
import { haltEvent, label } from "utils/functions";

type TitlebarProps = {
  id: string;
};

const Titlebar: FC<TitlebarProps> = ({ id }) => {
  const {
    processes: { [id]: process },
  } = useProcesses();
  const {
    allowResizing = true,
    closing,
    componentWindow,
    hideMaximizeButton,
    hideMinimizeButton,
    hideTitlebarIcon,
    icon,
    title,
    maximized,
  } = process || {};
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize, onMinimize } = useWindowActions(id);
  const onClickClose = useDoubleClick(onClose);
  const onClickMaximize = useDoubleClick(onMaximize);
  const { menu, setMenu } = useMenu();
  const titlebarContextMenu = useTitlebarContextMenu(id);
  const touchStartTimeRef = useRef<number>(0);
  const touchStartPositionRef = useRef<DOMRect>();
  const touchesRef = useRef<TouchList>();
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
      }
    },
    [componentWindow, titlebarContextMenu]
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
      <Button
        {...(!hideMaximizeButton && allowResizing && !closing
          ? onClickMaximize
          : {})}
        onMouseDownCapture={({ button }) => {
          if (button === 0 && Object.keys(menu).length > 0) {
            setMenu(Object.create(null) as MenuState);
          }
        }}
        onMouseUpCapture={() => {
          if (componentWindow && componentWindow !== document.activeElement) {
            componentWindow.focus(PREVENT_SCROLL);
          }
        }}
        onTouchEndCapture={onTouchEnd}
        onTouchStartCapture={onTouchStart}
      >
        <figure>
          {!hideTitlebarIcon && (
            <Icon alt={title} imgSize={16} src={icon} {...onClickClose} />
          )}
          <figcaption>{title}</figcaption>
        </figure>
      </Button>

      <div className="flex items-center space-x-2 mr-2">
        {!hideMinimizeButton && (
          <button
            aria-label="Minimize"
            className="
          w-3 h-3
          bg-yellow-400
          rounded-full
          hover:bg-yellow-500
          focus:outline-none
          flex
          items-center
          justify-center
          group
        "
            onClick={onMinimize}
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
            className={`w-3 h-3 rounded-full  flex
          items-center
          justify-center       group
            ${allowResizing ? "bg-green-400 hover:bg-green-500" : "bg-gray-500 cursor-not-allowed"}`}
            disabled={!allowResizing}
            onClick={onMaximize}
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
          className="w-3 h-3 bg-red-400 rounded-full
        hover:bg-red-500 focus:outline-none  flex
          items-center
          justify-center group"
          onClick={onClose}
          type="button"
          {...label("Close")}
        >
          <div className="w-1 h-auto invisible group-hover:visible">
            <CloseIcon />
          </div>
        </button>
      </div>
    </StyledTitlebar>
  );
};

export default memo(Titlebar);

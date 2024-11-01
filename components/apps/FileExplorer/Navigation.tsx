import { basename, dirname } from "path";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import AddressBar from "components/apps/FileExplorer/AddressBar";
import StyledNavigation from "components/apps/FileExplorer/StyledNavigation";
import useTitlebarContextMenu from "components/system/Window/Titlebar/useTitlebarContextMenu";
import { useMenu } from "contexts/menu";
import { useProcesses } from "contexts/process";
import useHistory from "hooks/useHistory";
import { ROOT_NAME } from "utils/constants";
import { haltEvent, label } from "utils/functions";
import useResizeObserver from "hooks/useResizeObserver";

type NavigationProps = {
  hideSearch: boolean;
  id: string;
};

const CONTEXT_MENU_OFFSET = 3;

const Navigation = forwardRef<HTMLInputElement, NavigationProps>(
  ({ hideSearch, id }, inputRef) => {
    const { url: changeUrl, processes } = useProcesses();
    const process = processes[id] || {}; // Ensure `process` exists
    const url = process.url || ""; // Provide a default value for `url`
    const upTo = url === "/" ? "" : basename(dirname(url));
    const { contextMenu, menu, setMenu } = useMenu();
    const { canGoBack, canGoForward, history, moveHistory, position } =
      useHistory(url, id);
    const recentItemsMenu = useMemo(
      () =>
        history
          .map((historyUrl, index) => ({
            action: () => moveHistory(index - position),
            checked: position === index,
            label: basename(historyUrl) || ROOT_NAME,
            primary: position === index,
          }))
          .reverse(),
      [history, moveHistory, position]
    );
    const { onContextMenuCapture } = useMemo(
      () => contextMenu?.(() => recentItemsMenu),
      [contextMenu, recentItemsMenu]
    );
    const [isRecentMenuOpen, setIsRecentMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const [removeSearch, setRemoveSearch] = useState(false);
    const resizeCallback = useCallback<ResizeObserverCallback>(
      ([{ contentRect }]) => {
        const tooSmallForSearch = contentRect.width < 260;

        if (removeSearch && !tooSmallForSearch) {
          setRemoveSearch(false);
        } else if (!removeSearch && tooSmallForSearch) {
          setRemoveSearch(true);
        }
      },
      [removeSearch]
    );

    useEffect(() => {
      setIsRecentMenuOpen(recentItemsMenu === menu.items);
    }, [menu.items, recentItemsMenu]);

    useResizeObserver(navRef.current, resizeCallback);

    return (
      <StyledNavigation
        ref={navRef}
        {...useTitlebarContextMenu(id)}
        onDragOver={haltEvent}
        onDrop={haltEvent}
      >
        <button
          disabled={!canGoBack}
          onClick={() => moveHistory(-1)}
          type="button"
          {...label(
            canGoBack
              ? `Back to ${basename(history[position - 1]) || ROOT_NAME}`
              : "Back"
          )}
        >
          <Icon
            height="1.2rem"
            icon="weui:back-filled"
            style={{ color: "white" }}
            width="1.2rem"
          />
        </button>

        <button
          disabled={!canGoForward}
          onClick={() => moveHistory(+1)}
          type="button"
          {...label(
            canGoForward
              ? `Forward to ${basename(history[position + 1]) || ROOT_NAME}`
              : "Forward"
          )}
          className="rotate-180 pt-1"
        >
          <Icon
            height="1.2rem"
            icon="weui:back-filled"
            style={{ color: "white" }}
            width="1.2rem"
          />
        </button>

        <AddressBar ref={inputRef} id={id} />
        {/* {/^FileExplorer__?\/.*$/i.test(id) ||
          (id === "FileExplorer" && <SearchBar id={id} />)} */}
      </StyledNavigation>
    );
  }
);

export default Navigation;

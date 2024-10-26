import { basename, dirname } from "path";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AddressBar from "components/apps/FileExplorer/AddressBar";
import SearchBar from "components/apps/FileExplorer/SearchBar";
import StyledNavigation from "components/apps/FileExplorer/StyledNavigation";
import useTitlebarContextMenu from "components/system/Window/Titlebar/useTitlebarContextMenu";
import { useMenu } from "contexts/menu";
import { useProcesses } from "contexts/process";
import useHistory from "hooks/useHistory";
import Button from "styles/common/Button";
import { ROOT_NAME } from "utils/constants";
import { haltEvent, label } from "utils/functions";
import useResizeObserver from "hooks/useResizeObserver";
import { LeftArrow, RightArrow } from "components/system/Taskbar/Search/Icons";

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
        <Button
          disabled={!canGoBack}
          onClick={() => moveHistory(-1)}
          {...label(
            canGoBack
              ? `Back to ${basename(history[position - 1]) || ROOT_NAME}`
              : "Back"
          )}
        >
          <LeftArrow />
        </Button>
        <Button
          disabled={!canGoForward}
          onClick={() => moveHistory(+1)}
          {...label(
            canGoForward
              ? `Forward to ${basename(history[position + 1]) || ROOT_NAME}`
              : "Forward"
          )}
        >
          <RightArrow />
        </Button>

        <AddressBar ref={inputRef} id={id} />
        {/^FileExplorer__?\/.*$/i.test(id) ||
          (id === "FileExplorer" && <SearchBar id={id} />)}
      </StyledNavigation>
    );
  }
);

export default Navigation;

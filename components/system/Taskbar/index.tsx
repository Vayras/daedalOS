import { memo, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import SearchButton from "components/system/Taskbar/Search/SearchButton";
import FileExplorerButton from "components/system/Taskbar/Search/FileExplorerButton";
import StartButton from "components/system/Taskbar/StartButton";
import StyledTaskbar from "components/system/Taskbar/StyledTaskbar";
import TaskbarEntries from "components/system/Taskbar/TaskbarEntries";
import useTaskbarContextMenu from "components/system/Taskbar/useTaskbarContextMenu";
import { CLOCK_CANVAS_BASE_WIDTH, FOCUSABLE_ELEMENT } from "utils/constants";
import { useSession } from "contexts/session";
import { useProcesses } from "contexts/process";
import directory from "contexts/process/directory";
import { type ProcessArguments } from "contexts/process/types";
import Dock from "../Dock/Dock";

const AIButton = dynamic(() => import("components/system/Taskbar/AI/AIButton"));
const AIChat = dynamic(() => import("components/system/Taskbar/AI/AIChat"));
const Calendar = dynamic(() => import("components/system/Taskbar/Calendar"));
const Search = dynamic(() => import("components/system/Taskbar/Search"));
const StartMenu = dynamic(() => import("components/system/StartMenu"));
const SUGGESTED = ["FileExplorer", "Terminal", "Messenger", "Browser", "Paint"];

const Taskbar: FC = () => {
  const [startMenuVisible, setStartMenuVisible] = useState(false);
  const [fileExplorerVisible, setFileExplorerVisible] = useState(false); // Track File Explorer state
  const [searchVisible, setSearchVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [aiVisible, setAIVisible] = useState(false);
  const [clockWidth, setClockWidth] = useState(CLOCK_CANVAS_BASE_WIDTH);
  const { open, processes } = useProcesses(); // Get processes from context
  const { aiEnabled } = useSession();

  const openApp = useCallback(
    (pid: string, args?: ProcessArguments) => {
      open(pid, args);
      if (pid === "FileExplorer") {
        setFileExplorerVisible(true); // Show File Explorer taskbar entry
      }
    },
    [open]
  );

  // Effect to track when File Explorer is closed and reset visibility
  useEffect(() => {
    if (!processes.FileExplorer) {
      setFileExplorerVisible(false); // Reset visibility when File Explorer is closed
    }
  }, [processes]);

  const toggleStartMenu = useCallback(
    (showMenu?: boolean): void =>
      setStartMenuVisible((currentMenuState) => showMenu ?? !currentMenuState),
    []
  );
  const toggleSearch = useCallback(
    (showSearch?: boolean): void =>
      setSearchVisible(
        (currentSearchState) => showSearch ?? !currentSearchState
      ),
    []
  );
  const toggleCalendar = useCallback(
    (showCalendar?: boolean): void =>
      setCalendarVisible(
        (currentCalendarState) => showCalendar ?? !currentCalendarState
      ),
    []
  );
  const toggleAI = useCallback(
    (showAI?: boolean): void =>
      setAIVisible((currentAIState) => showAI ?? !currentAIState),
    []
  );

  const hasAI = aiEnabled;

  return (
    <>
      <AnimatePresence initial={false} presenceAffectsLayout={false}>
        {startMenuVisible && (
          <StartMenu key="startMenu" toggleStartMenu={toggleStartMenu} />
        )}
        {searchVisible && <Search key="search" toggleSearch={toggleSearch} />}
      </AnimatePresence>
      <StyledTaskbar {...useTaskbarContextMenu()} {...FOCUSABLE_ELEMENT}>
        <StartButton
          startMenuVisible={startMenuVisible}
          toggleStartMenu={toggleStartMenu}
        />
        <SearchButton
          searchVisible={searchVisible}
          toggleSearch={toggleSearch}
        />
        {!fileExplorerVisible && ( // Hide File Explorer button once opened
          <FileExplorerButton
            fileExplorerVisible={fileExplorerVisible}
            onClick={() => openApp(SUGGESTED[0])}
            title={directory[SUGGESTED[0]].title}
          />
        )}
        <TaskbarEntries clockWidth={clockWidth} hasAI={hasAI} />
      </StyledTaskbar>


      <AnimatePresence initial={false} presenceAffectsLayout={false}>
        {calendarVisible && (
          <Calendar key="calendar" toggleCalendar={toggleCalendar} />
        )}
        {aiVisible && <AIChat key="aiChat" toggleAI={toggleAI} />}
      </AnimatePresence>
    </>
  );
};

export default memo(Taskbar);

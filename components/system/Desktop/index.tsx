import { useRef } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import { DESKTOP_PATH } from "utils/constants";
import { TopBar } from "components/topbar/TopBar";

const Desktop: FC = ({ children }) => {
  const desktopRef = useRef<HTMLElement | null>(null);

  useWallpaper(desktopRef);

  return (
    <StyledDesktop ref={desktopRef}>
      <TopBar />
      <FileManager
        url={DESKTOP_PATH}
        allowMovingDraggableEntries
        hideLoading
        hideScrolling
        isDesktop
        loadIconsImmediately
      />
      {children}
    </StyledDesktop>
  );
};

export default Desktop;

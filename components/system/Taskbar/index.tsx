import { memo, useCallback } from "react";
import styled from "styled-components";
import StyledTaskbar from "components/system/Taskbar/StyledTaskbar";
import useTaskbarContextMenu from "components/system/Taskbar/useTaskbarContextMenu";
import { FOCUSABLE_ELEMENT } from "utils/constants";
import { useProcesses } from "contexts/process";
import directory from "contexts/process/directory";
import { type ProcessArguments } from "contexts/process/types";

const SUGGESTED = ["FileExplorer", "Terminal", "Messenger", "Browser", "Paint"];

const DockButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  position: relative; /* Position relative for dot positioning */
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.1);
  }
  z-index: 999;

  /* Dot Indicator */
  &::after {
    content: "";
    position: absolute;
    bottom: 5px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #0f0; /* Dot color */
    opacity: ${(props) => (props.isOpen ? 1 : 0)}; /* Only show if open */
    transition: opacity 0.3s;
  }
`;

const Taskbar: FC = () => {
  const { open } = useProcesses();

  const openApp = useCallback(
    (pid: string, args?: ProcessArguments) => {
      open(pid, args);
    },
    [open]
  );

  return (
    <StyledTaskbar {...useTaskbarContextMenu()} {...FOCUSABLE_ELEMENT}>
      {SUGGESTED.map((app) => (
        <DockButton
          key={app}
          onClick={() => openApp(app)}
          title={directory[app]?.title || app}
        >
          <img alt={`${app} icon`} src={`/System/icons/144x144/${app}.avif`} />
        </DockButton>
      ))}
    </StyledTaskbar>
  );
};

export default memo(Taskbar);

import { useTheme } from "styled-components";
import { OpenFolder } from "components/system/Taskbar/Search/Icons";
import StyledTaskbarButton from "components/system/Taskbar/StyledTaskbarButton";
import { SEARCH_BUTTON_TITLE } from "components/system/Taskbar/functions";
import useTaskbarContextMenu from "components/system/Taskbar/useTaskbarContextMenu";
import { DIV_BUTTON_PROPS } from "utils/constants";
import { label } from "utils/functions";

type StartButtonProps = {
  fileExplorerVisible: boolean;
  onClick: () => void;
  title: string;
};

const FileExplorerButton: FC<StartButtonProps> = ({
  fileExplorerVisible,
  onClick,
  title,
}) => {
  const {
    sizes: { taskbar },
  } = useTheme();

  return (
    <StyledTaskbarButton
      $active={fileExplorerVisible}
      $left={100}
      onClick={() => onClick()}
      {...DIV_BUTTON_PROPS}
      {...label(SEARCH_BUTTON_TITLE)}
      {...useTaskbarContextMenu()}
      title={title}
    >
      <OpenFolder />
    </StyledTaskbarButton>
  );
};

export default FileExplorerButton;

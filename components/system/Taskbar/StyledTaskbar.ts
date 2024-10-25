// StyledTaskbar styled as macOS Dock
import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledTaskbar = styled.nav`
  background-color: transparent;
  bottom: 10px;
  contain: size layout;
  height: ${TASKBAR_HEIGHT}px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 75px;
  border-radius: 12px;
  z-index: 100000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default StyledTaskbar;

// StyledTaskbar styled as macOS Dock
import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledTaskbar = styled.nav`
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  border: 1px solid #6c6f7a;
  background-color: #444652;
  bottom: 10px;
  contain: size layout;
  height: ${TASKBAR_HEIGHT}px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 75px;
  border-radius: 12px;
  z-index: 100000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
`;

export default StyledTaskbar;

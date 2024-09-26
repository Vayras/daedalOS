// MenuBar.jsx
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  padding: 5px 15px;
  height: 22px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

const MenuBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBarRight = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.span`
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const TimeDisplay = styled.div`
  margin-left: 15px;
`;

const MenuBar = () => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <MenuBarContainer>
      <MenuBarLeft>
        <IconWrapper>
          <Icon icon="ri:apple-fill" />
        </IconWrapper>
        <MenuItem>Finder</MenuItem>
      </MenuBarLeft>
      <MenuBarRight>
        <IconWrapper>
          <Icon icon="material-symbols:wifi" />
        </IconWrapper>
        <IconWrapper>
          <Icon icon="i-bx:search" />
        </IconWrapper>
        <TimeDisplay>{currentTime}</TimeDisplay>
      </MenuBarRight>
    </MenuBarContainer>
  );
};

export default MenuBar;

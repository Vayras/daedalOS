import { useRef } from "react";
import styled from "styled-components";
import { scaleValue } from "utils/scale";

const maxAdditionalSize = 5;

const Main = styled.nav`
  position: fixed;
  bottom: 10px;
  left: 40%;
  margin: auto auto 12px auto;
  border-radius: 14px;
  padding: 0 3px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.15)
  );
  box-shadow: rgba(255, 255, 255, 0.17) 0px 0px 0px 1px inset;
`;

const DockList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const AppItem = styled.li`
  width: 60px;
  height: 60px;
  position: relative;
  transition:
    width,
    height,
    margin-top,
    cubic-bezier(0.25, 1, 0.5, 1) 100ms;

  &:hover {
    width: 90px;
    height: 90px;
    margin-top: -30px;
  }

  &:hover + & {
    width: calc(80px + var(--dock-offset-right, 0px));
    height: calc(80px + var(--dock-offset-right, 0px));
    margin-top: calc(-20px + var(--dock-offset-right, 0px) * -1);
  }

  &:hover + & + & {
    width: calc(70px + var(--dock-offset-right, 0px));
    height: calc(70px + var(--dock-offset-right, 0px));
    margin-top: calc(-10px + var(--dock-offset-right, 0px) * -1);
  }

  &:has(+ &:hover) {
    width: calc(80px + var(--dock-offset-left, 0px));
    height: calc(80px + var(--dock-offset-left, 0px));
    margin-top: calc(-20px + var(--dock-offset-left, 0px) * -1);
  }

  &:has(+ & + &:hover) {
    width: calc(70px + var(--dock-offset-left, 0px));
    height: calc(70px + var(--dock-offset-left, 0px));
    margin-top: calc(-10px + var(--dock-offset-left, 0px) * -1);
  }
`;

const AppLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 12px;
  color: #fff;
`;

const AppImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Tooltip = styled.span`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: ease-in opacity 100ms;
  display: block;
  background: rgba(0, 0, 0, 0.58);
  padding: 8px;
  border-radius: 12px;
  height: auto;
  max-width: 200px; /* Limit the width */
  box-shadow: rgba(0, 0, 0, 0.17) 0px 12px 8px 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${AppItem}:hover &,
  ${AppItem}:focus-within & {
    opacity: 1;
  }
`;

export const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <Main ref={dockRef}>
      <DockList>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/arc.png" />
            <Tooltip>Arc Browser</Tooltip>
          </AppLink>
        </AppItem>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/1password.png" />
            <Tooltip>1Password</Tooltip>
          </AppLink>
        </AppItem>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/calendar.png" />
            <Tooltip>Calendar</Tooltip>
          </AppLink>
        </AppItem>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/email.png" />
            <Tooltip>Mail</Tooltip>
          </AppLink>
        </AppItem>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/signal.png" />
            <Tooltip>Signal</Tooltip>
          </AppLink>
        </AppItem>
        <AppItem onMouseMove={handleAppHover}>
          <AppLink href="/" target="_blank">
            <AppImage src="https://www.frontend.fyi/playground-assets/macos-dock/icons/slack.png" />
            <Tooltip>Slack</Tooltip>
          </AppLink>
        </AppItem>
        {/* Repeat AppItem for each app */}
      </DockList>
    </Main>
  );
};

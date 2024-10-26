import styled from "styled-components";

const StyledDesktop = styled.main`
  background-image: url("/wallpaper-day.jpg");
  background-size: cover;
  background-position: center;
  contain: strict;
  height: 100%;
  inset: 0;
  overflow: hidden;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;

  #loading-status {
    background-color: #fff;
    border-radius: 10px;
    display: none;
    font-weight: 600;
    left: 50%;
    padding: 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  > canvas {
    background-color: inherit;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  /* When the .dark class is added to the html element */
  html.dark & {
    background-image: url("/wallpaper-night.jpg");
  }
`;

export default StyledDesktop;

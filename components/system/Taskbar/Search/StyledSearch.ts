import { m as motion } from "framer-motion";
import styled from "styled-components";

type StyledSearchProps = {
  $singleLine: boolean;
};

const StyledSearch = styled(motion.nav)<StyledSearchProps>`
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 620px;
  @keyframes fade-in {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  .search {
    width: 100%;
    top: 0px;
    input {
      appearance: none;
      background-color: #dadadb;
      border-radius: 5px;
      color: #000;
      font-size: 15px;
      height: 60px;
      padding-left: 37px;
      width: 100%;

      &::placeholder {
        color: #a3a3a5;
        inset: 0;
        left: 37px;
        opacity: 100%;
        overflow: visible;
        font-size: 20px;
      }

      &::-webkit-search-cancel-button {
        display: none;
        margin: 0 0 0 8px;
      }
    }
  }

  .content {
    animation: fade-in 0.85s;
    height: calc(100% - 40px);

    .no-results {
      display: flex;
      font-size: 14px;
      font-weight: 300;
      padding: 5px 15px;
      place-items: center;
      pointer-events: none;
      user-select: none;
      margin-left: 15px;

      svg {
        fill: #fff;
        height: 32px;
        margin-right: 12px;
        width: 32px;
      }
    }

    .tab {
      color: rgb(175, 175, 175);
      display: flex;
      flex-direction: column;
      height: ${({ theme }) =>
        `calc(100% - ${theme.sizes.search.headerHeight}px - ${theme.sizes.search.inputHeight}px)`};
      place-content: center;
      place-items: center;
      position: absolute;
      top: ${({ theme }) => `${theme.sizes.search.headerHeight}px`};
      width: 100%;

      h1 {
        font-size: 28px;
        font-weight: 400;
        padding-top: 14px;
      }

      h3 {
        font-size: 14px;
        font-weight: 400;
        padding-top: 8px;
      }

      svg {
        fill: rgb(115, 115, 115);
        height: 128px;
        width: 128px;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  /* Mobile breakpoints */
  @media (max-width: 620px) {
    bottom: 20px;
    width: 420px;
  }

  @media (max-width: 420px) {
    bottom: 20px;
    width: 320px;
  }
`;

export default StyledSearch;

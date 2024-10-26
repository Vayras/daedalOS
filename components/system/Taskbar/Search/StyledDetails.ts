import styled from "styled-components";

const StyledDetails = styled.div`
  background-color: #dadadb;
  border-bottom: none;
  box-sizing: content-box;
  display: flex;
    height: ${({ theme }) =>
      `calc(100% - ${theme.sizes.search.headerHeight}px + ${theme.sizes.search.inputHeight}px)`};
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 20px;
  place-items: center;
  position: relative;
  scrollbar-gutter: auto;
  width: 100%;
  margin-bottom: 16px;
  border-top-right-radius: 5px;
  scrollbar-width: none;

  picture {
    padding-bottom: 18px;

    &:not(:first-of-type) {
      position: absolute;

      img {
        height: 64px;
        max-height: 64px;
        max-width: 64px;
        min-height: 64px;
        min-width: 64px;
        position: relative;
        width: 64px;
      }
    }
  }

  h1 {
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    word-break: break-word;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 13px;
    font-weight: 300;
  }

  table {
    border-collapse: collapse;
    border-top: 2px solid rgb(161, 161, 161);
    display: grid;
    font-size: 12px;
    gap: 10px;
    margin-top: 15px;
    padding: 15px 0;
    padding-bottom: 0;
    width: 100%;

    th {
      max-width: 100px;
      min-width: 100px;
      padding: 10px;
      text-align: left;
      white-space: nowrap;
      width: 100px;
    }

    td {
      color: black
      padding-right: 5px;
      word-break: break-all;
    }

    tr:first-child {
      td {
        text-decoration: underline;

        &:hover {
          color: black
        }
      }
    }
  }

  ol {
    border-top: 2px solid rgb(161, 161, 161);
    margin-bottom: 7px;
    margin-top: 15px;
    padding: 10px 0;
    width: 100%;

    li {
      button {
        color:black;
        display: flex;
        font-size: 12px;
        padding: 8px 18px;
        place-items: start;

        svg {
          color:black;
          height: 16px;
          margin-right: 12px;
          width: 16px;
        }
      }

    }
  }

  .back {
    border-radius: 50%;
    display: flex;
    height: 32px;
    left: 6px;
    place-content: center;
    place-items: center;
    position: absolute;
    top: 6px;
    width: 32px;

    svg {
      fill: #fff;
      height: 18px;
      margin-right: 2px;
      transform: scaleX(-1);
      width: 18px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 20%);
    }
  }
`;

export default StyledDetails;

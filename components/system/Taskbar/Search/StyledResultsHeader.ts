import styled from "styled-components";

const StyledResultsHeader = styled.figcaption`
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 7px;

  &.disabled {
    pointer-events: none;
    user-select: none;
  }
`;

export default StyledResultsHeader;

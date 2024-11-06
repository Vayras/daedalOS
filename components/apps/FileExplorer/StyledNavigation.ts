import styled from "styled-components";

const StyledNavigation = styled.nav`
  color: black;
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navBarHeight};
`;

export default StyledNavigation;

import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  height: ${({ theme }) => theme.sizes.fileExplorer.navBarHeight};
`;

export default StyledNavigation;

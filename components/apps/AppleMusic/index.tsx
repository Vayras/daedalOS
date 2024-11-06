

import { type FC } from "react";
import styled from "styled-components";
import useCalculatorHook from "components/apps/Calculator/useCalculator";
import AppContainer from "components/system/Apps/AppContainer";

const CalculatorWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AppleMusic: FC<{ id: string }> = ({ id }) => (
  <AppContainer
    StyledComponent={CalculatorWrapper}
    id={id}
    useHook={useCalculatorHook}
  >
    <iframe
      frameBorder="0"
      height="100%"
      src="https://www.tannerv.com/music"
      title="Embedded Website"
      width="100%"
    />
  </AppContainer>
);

export default AppleMusic;

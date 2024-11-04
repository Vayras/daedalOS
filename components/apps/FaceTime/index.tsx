// components/apps/Calculator.tsx

import { type FC } from "react";
import styled from "styled-components";
import FaceTime from "components/apps/FaceTime/FaceTime";
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
    <FaceTime />
  </AppContainer>
);

export default AppleMusic;

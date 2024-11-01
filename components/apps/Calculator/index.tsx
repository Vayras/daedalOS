// components/apps/Calculator.tsx

import { type FC } from "react";
import styled from "styled-components";
import { Calculator } from "react-mac-calculator";
import useCalculatorHook from "components/apps/Calculator/useCalculator";
import AppContainer from "components/system/Apps/AppContainer";

const CalculatorWrapper = styled.div``;

const CalculatorApp: FC<{ id: string }> = ({ id }) => (
  <AppContainer
    StyledComponent={CalculatorWrapper}
    id={id}
    useHook={useCalculatorHook}
  >
    <div>
      <Calculator />
    </div>
  </AppContainer>
);

export default CalculatorApp;

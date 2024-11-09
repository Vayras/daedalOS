/* eslint-disable no-param-reassign */
// components/system/Apps/Calculator/useCalculatorHook.ts

import { useEffect } from "react";
import { type ContainerHookProps } from "components/system/Apps/AppContainer";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { loadFiles } from "utils/functions";

const useCalculatorHook = ({
  containerRef,
  id,
  setLoading,
}: ContainerHookProps): void => {
  const { processes: { [id]: process } = {} } = useProcesses();
  const {
    windowStates: { [id]: windowState },
  } = useSession();
  const { libs } = process || {};

  useEffect(() => {
    // If the Calculator requires any library files, load them here
    if (libs && libs.length > 0) {
      setLoading(true);
      loadFiles(libs).then(() => setLoading(false));
    } else {
      // No libs to load, so remove loading state immediately
      setLoading(false);
    }
  }, [libs, setLoading]);

  // Example of additional setup logic that might depend on window state
  useEffect(() => {
    // Update calculator size or setup any initial conditions based on windowState, if required
    const { width, height } = windowState?.size || {};
    if (containerRef.current && width && height) {
      containerRef.current.style.width = `${width}px`;
      containerRef.current.style.height = `${height}px`;
    }
  }, [windowState, containerRef]);

  // Any cleanup (if necessary)
  useEffect(
    () => () => {
      // Perform any cleanup actions, if necessary, on unmount
    },
    []
  );
};

export default useCalculatorHook;

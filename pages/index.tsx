import { memo, useState } from "react";
import { Boot } from "pages/boot";
import Taskbar from "components/system/Taskbar";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import { Login } from "pages/login";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();

  const [login, setLogin] = useState(false);
  const [booting, setBooting] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);
  const [sleep, setSleep] = useState<boolean>(false);

  const shutMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(false);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const restartMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(true);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const sleepMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(false);
    setSleep(true);
    setLogin(false);
    setBooting(true);
  };

  if (booting) {
    return <Boot restart={restart} setBooting={setBooting} sleep={sleep} />;
  }
  if (login) {
    return (
      <div>
        <Desktop>
          <Taskbar />
          <AppsLoader />
        </Desktop>
      </div>
    );
  }
  return (
    <Login
      restartMac={restartMac}
      setLogin={setLogin}
      shutMac={shutMac}
      sleepMac={sleepMac}
    />
  );
};

export default memo(Index);

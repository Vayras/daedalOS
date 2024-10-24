/* eslint-disable react/function-component-definition */
import { useRef } from "react";
import { MenuItem, MenuItemGroup } from "components/topbar/base";
import { useClickOutside } from "hooks/useClickOutside";

interface AppleMenuProps {
  btnRef: React.RefObject<HTMLDivElement>;
  logout: () => void;
  restart: (e: React.MouseEvent<HTMLLIElement>) => void;
  shut: (e: React.MouseEvent<HTMLLIElement>) => void;
  sleep: (e: React.MouseEvent<HTMLLIElement>) => void;
  toggleAppleMenu: () => void;
}

export default function AppleMenu({
  logout,
  shut,
  restart,
  sleep,
  toggleAppleMenu,
  btnRef,
}: Readonly<AppleMenuProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, toggleAppleMenu, [btnRef]);

  return (
    <div
      ref={ref}
      className="fixed top-10 text-black dark:text-white dark:bg-[#3a495b] bg-gray-200 opacity-95 border-2 border-gray-950 rounded-lg shadow-md shadow-black/25 dark:shadow-black/25 left-2 w-56  "
    >
      <MenuItemGroup>
        <MenuItem>About This Mac</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>System Preferences...</MenuItem>
        <MenuItem>App Store...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>Recent Items</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem>Force Quit...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={sleep}>Sleep</MenuItem>
        <MenuItem onClick={restart}>Restart...</MenuItem>
        <MenuItem onClick={shut}>Shut Down...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup border={false}>
        <MenuItem onClick={logout}>Lock Screen</MenuItem>
        <MenuItem onClick={logout}>Log Out Xiaohan Zou...</MenuItem>
      </MenuItemGroup>
    </div>
  );
}

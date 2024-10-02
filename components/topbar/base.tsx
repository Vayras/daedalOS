import type React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

interface MenuItemGroupProps {
  children: React.ReactNode;
  border?: boolean;
}

const MenuItem = ({ children, onClick }: MenuItemProps) => (
  <li
    className="leading-6 cursor-default px-2.5 rounded hover:text-white hover:bg-blue-500"
    onClick={onClick}
  >
    {children}
  </li>
);

const MenuItemGroup = ({ children, border = true }: MenuItemGroupProps) => (
  <ul
    className={`relative px-1 pt-1.5 mx-2 block pb-1`}

  >
    <div
      style={{
        borderBottom: border ? '1px solid darkgray' : undefined,
      }}
    >
    {children}
    </div>
  </ul>
);

export { MenuItem, MenuItemGroup };

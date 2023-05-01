import { ReactNode } from "react";

export interface IMenuProps {
  menu: IMenuItem;
  selected: boolean;
}

export interface IMenuItem {
  text: string;
  pathName: string;
  icon: ReactNode;
}
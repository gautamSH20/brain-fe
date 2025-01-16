import { ReactElement } from "react";

export interface Sidebarcomp {
  text: string;
  icon: ReactElement;
  onclick?: () => void;
}

export const SideBarComponent = (props: Sidebarcomp) => {
  return (
    <div
      className="flex items-center mt-3 p-2 cursor-pointer rounded max-w-48 hover:bg-gray-200"
      onClick={props.onclick}
    >
      <div className="mr-6">{props.icon}</div>
      {props.text}
    </div>
  );
};

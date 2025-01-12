import { ReactElement } from "react";
import { SideBarComponent } from "./SideBarComponent";

export interface SidebarProps {
  brainIcon?: ReactElement;
  text: string;
}

export const SideBare = (props: SidebarProps) => {
  return (
    <div className="h-screen px-5 py-1 w-1/5 bg-[#FFFFFF]  ">
      <div className="flex items-center mb-8">
        {props.brainIcon}
        <div className="m-1 text-2xl font-bold">{props.text}</div>
      </div>
      <SideBarComponent text="hello" icon="twiter" />
    </div>
  );
};

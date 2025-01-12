import { ReactElement } from "react";
import { SideBarComponent } from "./SideBarComponent";
import { TwiterIcon } from "../../icons/TwiterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "./DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { TagsIcon } from "../../icons/TagIcon";
import { BrainIcon } from "../../icons/BrainIcon";

export interface SidebarProps {
  brainIcon?: ReactElement;
  text: string;
}

export const SideBare = () => {
  return (
    <div className="h-screen border-r left-0 top-0 pl-6 bg-white w-72  fixed ">
      <div className="flex items-center mb-8 pt-4">
        <BrainIcon />
        <div className="m-1 text-2xl font-bold">Second-Brain</div>
      </div>
      <div className="pt-4 pl-4 ">
        <SideBarComponent icon={<TwiterIcon />} text="Twitter" />
        <SideBarComponent icon={<YoutubeIcon />} text="Youtube" />
        <SideBarComponent icon={<DocsIcon />} text="Documents" />
        <SideBarComponent icon={<LinkIcon />} text="Links" />
        <SideBarComponent icon={<TagsIcon />} text="Tags" />
      </div>
    </div>
  );
};

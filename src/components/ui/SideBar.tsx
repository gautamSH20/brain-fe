import { ReactElement } from "react";
import { SideBarComponent } from "./SideBarComponent";
import { TwiterIcon } from "../../icons/TwiterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "./DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { TagsIcon } from "../../icons/TagIcon";
import { BrainIcon } from "../../icons/BrainIcon";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export interface SidebarProps {
  brainIcon?: ReactElement;
  text: string;
}

export const SideBare = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen border-r left-0 top-0 pl-6 bg-white w-72  fixed ">
      <div className="flex items-center mb-8 pt-4">
        <BrainIcon />
        <div className="m-1 text-2xl font-bold text-purple-500">IN-BRAIN</div>
      </div>
      <div className="pt-4 pl-4 ">
        <SideBarComponent
          icon={<TwiterIcon />}
          text="Twitter"
          onclick={() => {
            alert("will be worked on");
          }}
        />
        <SideBarComponent
          icon={<YoutubeIcon />}
          text="Youtube"
          onclick={() => {
            alert("will be worked on");
          }}
        />
        <SideBarComponent
          icon={<DocsIcon />}
          text="Documents"
          onclick={() => {
            alert("will be worked on");
          }}
        />
        <SideBarComponent
          icon={<LinkIcon />}
          text="Links"
          onclick={() => {
            alert("will be worked on");
          }}
        />
        <SideBarComponent
          icon={<TagsIcon />}
          text="Tags"
          onclick={() => {
            alert("will be worked on");
          }}
        />
        <div className="absolute bottom-0">
          <Button
            text={localStorage.getItem("token") ? "logOut" : "Signup"}
            vairant="primary"
            size="sm"
            onclick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          />
        </div>
      </div>
    </div>
  );
};

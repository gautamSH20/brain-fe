import { ReactElement, useState } from "react";
import { SideBarComponent } from "./SideBarComponent";
import { TwiterIcon } from "../../icons/TwiterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { DocsIcon } from "./DocsIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { TagsIcon } from "../../icons/TagIcon";
import { BrainIcon } from "../../icons/BrainIcon";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../icons/Menu";
import { CloseIcon } from "../../icons/CloseIcon";

export interface SidebarProps {
  brainIcon?: ReactElement;
  text: string;
}

export const SideBare = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible((e) => !e);
    console.log(visible);
  };

  const navigate = useNavigate();
  return (
    <>
      {visible ? (
        ""
      ) : (
        <div className="fixed top-8 left-4 z-50  block ">
          <Menu onclick={toggle} />
        </div>
      )}
      <div
        className={`h-screen border-r left-0 top-0 pl-2 bg-white   fixed transition-transform duration-300 ${
          visible ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className=" flex items-center mb-8 pt-4 bg-gray-200">
          <BrainIcon />
          <div className="ml-1 text-2xl font-bold text-purple-500">
            IN-BRAIN
          </div>
          <div className="ml-20">
            <CloseIcon onclick={toggle} />
          </div>
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
    </>
  );
};

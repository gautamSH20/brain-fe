import { useRef, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../consfig";

interface ComponentProp {
  open: boolean;
  onClose: () => void;
}

enum Component {
  Youtube = "youtube",
  Twitter = "twitter",
}

function strEmpty(str: string | undefined) {
  return str?.trimStart()?.trimEnd();
}

export const CreateComponentModal = ({ open, onClose }: ComponentProp) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(Component.Youtube);
  const [load, setload] = useState(false);

  async function addContent() {
    const title1 = titleRef.current?.value;
    const link = linkRef.current?.value;

    const title = strEmpty(title1);
    try {
      const post = await axios.post(
        BACKEND_URL + "/api/v1/content",
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (post.data.message !== "something is wrong") onClose();
      else alert(post.data.message);
    } catch (e) {
      alert("something wrong" + e);
    }
    setTimeout(() => {
      setload((c) => !c);
    }, 140);
  }

  return (
    <div>
      {open && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-slate-500 opacity-60 "></div>
          <div className="h-screen w-screen top-0 left-0 fixed flex justify-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 rounded">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CloseIcon />
                  </div>
                </div>
                <div className="flex justify-center ">
                  <Input reference={titleRef} placeholder={"title"} />
                  <Input reference={linkRef} placeholder={"link"} />
                </div>
                <div className="flex justify-center gap-1">
                  <Button
                    text="Youtube"
                    vairant={
                      type === Component.Youtube ? "primary" : "secondary"
                    }
                    size="sm"
                    onclick={() => {
                      setType(() => Component.Youtube);
                    }}
                  />
                  <Button
                    text="Twitter"
                    vairant={
                      type === Component.Twitter ? "primary" : "secondary"
                    }
                    size="sm"
                    onclick={() => {
                      setType(() => Component.Twitter);
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    vairant="primary"
                    text="Submit"
                    size="sm"
                    onclick={() => {
                      addContent();
                      setload((c) => !c);
                    }}
                    loading={load}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

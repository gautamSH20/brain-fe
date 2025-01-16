import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Cards } from "../components/ui/Card";
import { CreateComponentModal } from "../components/ui/CreateComponentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBare } from "../components/ui/SideBar";
import { useContentHook } from "../hooks/useContentHook";

import axios from "axios";
import { BACKEND_URL } from "../consfig";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);
  const { content, refersh } = useContentHook();
  const [added, setAdded] = useState(0);

  useEffect(() => {
    refersh();
  }, [added]);
  // useEffect(() => {
  //   refersh();
  // }, [contentLen]);
  return (
    <div>
      <SideBare />
      <div className="min-h-screen ml-72 bg-gray-200 max-h-full">
        <CreateComponentModal
          open={modal}
          onClose={() => {
            setModal(() => false);
            setAdded((a) => a + 1);
          }}
        />

        <div className="p-2 flex justify-end flex-wrap ml-4 gap-4 ">
          <Button
            startIcon={<PlusIcon />}
            vairant="primary"
            size="sm"
            text="Add content"
            onclick={() => {
              setModal(() => true);
            }}
          ></Button>
          <Button
            startIcon={<ShareIcon />}
            vairant="secondary"
            size="sm"
            text="Share"
            onclick={async () => {
              const response = await axios.post(
                BACKEND_URL + "/api/v1/brain/share",
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              console.log(response);
              {
                response.data.message === "Link created"
                  ? alert(`localhost:51731/${response.data.share}`)
                  : alert(`localhost:51731/${response.data.Link}`);
              }
            }}
          ></Button>
        </div>
        <div className="flex gap-4 ml-4 flex-wrap">
          {content.map(({ title, link, type, _id }) => (
            <Cards
              title={title}
              type={type}
              link={link}
              _id={_id}
              ontouch={() => {
                setAdded((a) => a - 1);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

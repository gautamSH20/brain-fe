import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Cards } from "../components/ui/Card";
import { CreateComponentModal } from "../components/ui/CreateComponentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBare } from "../components/ui/SideBar";
import { useContentHook } from "../hooks/useContentHook";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);
  const { content, refersh } = useContentHook();

  useEffect(() => {
    refersh();
  }, [modal]);
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
          }}
        />

        <div className="p-6 flex justify-end">
          <Button
            startIcon={<PlusIcon />}
            vairant="primary"
            size="md"
            text="Add content"
            onclick={() => {
              setModal(() => true);
            }}
          ></Button>
          <Button
            startIcon={<ShareIcon />}
            vairant="secondary"
            size="md"
            text="Share"
            onclick={() => {}}
          ></Button>
          <Button
            text="signout"
            vairant="primary"
            size="md"
            onclick={() => {
              localStorage.removeItem("token");
            }}
          />
        </div>
        <div className="flex gap-4 ml-4 flex-wrap">
          {content.map(({ title, link, type, _id }) => (
            <Cards title={title} type={type} link={link} _id={_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

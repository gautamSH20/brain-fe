import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Cards } from "../components/ui/Card";
import { CreateComponentModal } from "../components/ui/CreateComponentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBare } from "../components/ui/SideBar";

export const DashBoard = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <SideBare />
      <div className="h-screen ml-72 bg-gray-200">
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
        </div>
        <div className="flex gap-4 ml-4">
          <Cards
            title="First youtube"
            type="youtube"
            link="https://www.youtube.com/watch?v=-5ZdF6y5VcU"
          />
          <Cards
            title="first tweet"
            type="twitter"
            link="https://x.com/gs841400/status/1877762787834831183"
          />
        </div>
      </div>
    </div>
  );
};

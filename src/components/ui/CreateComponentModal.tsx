import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export const CreateComponentModal = ({ open, onClose }) => {
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
                <div>
                  <Input placeholder={"title"} />
                  <Input placeholder={"link"} />
                </div>
                <div className="flex justify-center">
                  <Button
                    vairant="primary"
                    text="Submit"
                    size="sm"
                    onclick={() => {}}
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

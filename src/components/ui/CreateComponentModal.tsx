import { CloseIcon } from "../../icons/CloseIcon";

export const CreateComponentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-slate-500 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center ">
            <span className="bg-white opacity-100 rounded">
              <div className="flex justify-end">
                <CloseIcon />
              </div>
              <div></div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

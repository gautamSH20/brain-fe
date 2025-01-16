import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-[#0f172a] ">
      <span className="absolute top-4 left-4 text-2xl text-blue-200">
        Welome! IN-BRAIN! <br />
        <span className="text-md text-slate-200 opacity-60">
          here to keep your things to remember safe{" "}
        </span>
      </span>
      <Button
        text="login"
        someCss="absolute top-0 right-0 shadow hover:shadow-md hover:shadow-white ease-in duration-300 "
        vairant="primary"
        size="lg"
        onclick={() => {
          navigate("/signin");
        }}
      />

      <div className="h-screen w-screen  flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-inner p-4 hover:shadow-[#4f1177] ease-in duration-300">
          <span className="text-lg text-blue-800 font-bold shadow-md">
            Second brain
          </span>
          <br></br>
          <span className="opacity-60">
            {" "}
            are you ready to make your Second brain
          </span>
          <br></br>
          <Button
            text="get-Started"
            vairant="primary"
            size="md"
            onclick={() => {
              navigate("/signup");
            }}
            someCss="shadow hover:shadow-md ease-in hover:shadow-[#4f1177] duration-300"
          />
        </div>
      </div>
    </div>
  );
};

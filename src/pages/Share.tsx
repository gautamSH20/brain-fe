import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const Share = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen top-0 left-0 bg-[#7b40ce] opacity-60 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-[#4f1177] border p-8 min-w-48 ease-in duration-300">
        hi there<br></br>
        <span className="text-purple-900 font-bold text-xl">
          this section needs some work done
        </span>
        <br />
        <Button
          size="lg"
          text="Go-back"
          vairant="primary"
          someCss="shadow-sm hover:shadow-[#4f1177] hover:shadow-xl ease-in duration-300"
          onclick={() => {
            if (localStorage.getItem("token")) {
              navigate("/dashboard");
            } else {
              navigate("/signin");
            }
          }}
        />
      </div>
    </div>
  );
};

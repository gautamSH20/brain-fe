import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../consfig";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function Signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });
    alert("User has been created");
    navigate("/signin");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ease-in">
      <div className="bg-white rounded-xl shadow-md border p-8 min-w-48">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center">
          <Button
            vairant="primary"
            text="SignUp"
            size="md"
            fullWidth={true}
            onclick={Signup}
          />
        </div>
      </div>
    </div>
  );
}

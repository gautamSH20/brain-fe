import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../consfig";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function Signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    console.log(response.data.token);
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ease-in ">
      <div className="bg-white rounded-xl shadow-md border p-8 min-w-48 animate-shadow hover:animate-none">
        <Input
          reference={usernameRef}
          placeholder="Username"
          fullWidth={true}
        />
        <Input
          reference={passwordRef}
          placeholder="Password"
          fullWidth={true}
        />
        If you dont have an acount{":"}
        <Button
          vairant="secondary"
          text="signup"
          size="sm"
          onclick={() => navigate("/signup")}
        />
        <div className="flex justify-center">
          <Button
            vairant="primary"
            text="SignIn"
            size="md"
            fullWidth={true}
            onclick={Signin}
          />
        </div>
      </div>
    </div>
  );
}

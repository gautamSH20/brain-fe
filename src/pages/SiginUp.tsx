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

    try {
      const updated = await axios.post(BACKEND_URL + "/api/v1/signup", {
        username,
        password,
      });
      if (updated.data.message.issues) {
        if (updated.data.message.issues.length === 2) {
          alert("both fields are required");
        } else {
          if (updated.data.message.issues[0].path[0] === "username") {
            alert("username is " + updated.data.message.issues[0].code);
          } else {
            alert("password is " + updated.data.message.issues[0].code);
          }
        }
      } else {
        alert(updated.data.message);
        navigate("/signin");
      }
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center ease-in">
      <div className="bg-white rounded-xl shadow-md border p-8 min-w-48">
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
        If you have an account{":"}
        <Button
          vairant="secondary"
          text="signin"
          size="sm"
          onclick={() => navigate("/signin")}
        />
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

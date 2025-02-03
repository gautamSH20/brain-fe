import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../consfig";
import { useNavigate } from "react-router-dom";

export const useContentHook = () => {
  const [content, setContent] = useState([]);
  const [usenmae, setusename] = useState("");
  const navigation = useNavigate();
  function refersh() {
    axios
      .get(BACKEND_URL + "/api/v1/content", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContent(response.data.content);
        setusename(response.data.content[0].userId.username);
      });
  }
  useEffect(() => {
    refersh();
    navigation("/dashboard");
  }, []);
  return { content, refersh, usenmae };
};

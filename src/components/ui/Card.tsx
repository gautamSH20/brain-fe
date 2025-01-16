import axios from "axios";
import { DeleteIcon } from "../../icons/Delete";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwiterIcon } from "../../icons/TwiterIcon";
import { BACKEND_URL } from "../../consfig";

interface CardProps {
  title: string;
  link?: string;
  _id?: string;
  ontouch?: () => void;
  type: "youtube" | "twitter";
}

export const Cards = ({ title, link, type, _id, ontouch }: CardProps) => {
  async function del() {
    await axios.delete(BACKEND_URL + "/api/v1/content", {
      data: { contentId: _id },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
  return (
    <div className="p-4   bg-white shadow-md rounded-md  min-h-48 max-w-72 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="text-gray-200">
            <TwiterIcon />
          </div>
          {title}
        </div>
        <div className="flex">
          <div className="text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            <DeleteIcon
              onclick={() => {
                del();
                if (!ontouch) return;
                ontouch();
              }}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 ">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link?.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet ">
            <a href={link?.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};

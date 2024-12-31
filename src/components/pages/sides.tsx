import { useState } from "react";
import { openInNewTab } from "@/lib/utils";
import { CopyIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function Sides() {
  const [buttonText, setButtonText] = useState("Email");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("minchul.roh.peter@gmail.com");
      setButtonText("Copied to clipboard!");
      setTimeout(() => {
        setButtonText("Email");
      }, 2000);
    } catch (error) {
      setButtonText("Failed to copy");
      setTimeout(() => {
        setButtonText("Email");
      }, 2000);
    }
  };

  return (
    <aside className="mt-auto p-2 font-mono lg:mt-0 lg:flex-1">
      <div className="flex items-end gap-x-6 px-4 lg:flex-col lg:gap-y-2">
        <div className="text-sub flex-x-center group cursor-pointer hover:text-lime-400">
          <button onClick={handleCopyEmail} className="focus:outline-none">
            {buttonText}
          </button>
          <CopyIcon className="ml-1 opacity-0 lg:group-hover:opacity-100" />
        </div>
        <div className="text-sub flex-x-center group cursor-pointer hover:text-lime-400">
          <button
            onClick={() => openInNewTab("https://github.com/Peter-Roh")}
            className="focus:outline-none focus:ring-1 focus:ring-lime-500"
          >
            Github
          </button>
          <OpenInNewWindowIcon className="ml-1 opacity-0 lg:group-hover:opacity-100" />
        </div>
        <div className="text-sub flex-x-center group cursor-pointer hover:text-lime-400">
          <button
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1nBuWmxfUwJS62bvYS8Rd4uILtUo8OZQi/view?usp=drive_link",
              )
            }
            className="focus:outline-none focus:ring-1 focus:ring-lime-500"
          >
            CV
          </button>
          <OpenInNewWindowIcon className="ml-1 opacity-0 lg:group-hover:opacity-100" />
        </div>
      </div>
    </aside>
  );
}

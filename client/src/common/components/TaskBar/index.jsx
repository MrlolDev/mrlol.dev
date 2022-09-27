import { useState, useEffect } from "react";
import DateBar from "./DateBar";
import tippy from "tippy.js";

export default function TaskBar() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      tippy("#app", {
        content: "App",
      });
    }
  }, []);
  return (
    <nav
      className="absolute bottom-5 left-2/4 w-10/12 h-12 translate-x-[-50%] p-1.5 px-2.5 flex items-center 
    shadow-[0_4px_30px_rgba(0,0,0,0.3)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.3)] dark:bg-gray-700/[.5]
     bg-white/[.4] rounded-3xl backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.5)] 
     dark:border-[rgba(0,0,0,0.5)] justify-between select-none"
    >
      <img
        className="w-8 h-8 transition-all duration-500 dark:hover:bg-white/[.1] hover:bg-gray-900/[.2] rounded-3xl cursor-pointer"
        src="/gem.svg"
      ></img>
      <ul>
        <li
          className="cursor-pointer w-full h-full p-1 px-1.25 rounded dark:hover:bg-white/[.1] hover:bg-gray-900/[.2] "
          id="app"
        >
          <img src="/gem.svg" className="w-8  h-8" draggable="false" />
        </li>
      </ul>
      <DateBar />
    </nav>
  );
}

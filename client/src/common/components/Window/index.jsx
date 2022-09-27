import TopBar from "./TopBar";
import { dragElement } from "@/utils/dragApps";

export default function Window(props) {
  return (
    <div
      className="absolute w-9/12 gap-2 flex flex-col items-center resize z-[99]"
      id="JmzM5wQeisam2SA2KkAalGyM"
      open
      onClick={(t) => {
        var element = document.getElementById("JmzM5wQeisam2SA2KkAalGyM");
        dragElement(element);
      }}
    >
      <TopBar title={props.title} id="JmzM5wQeisam2SA2KkAalGyMheader" />
      <div className="bg-white w-full h-[30vw] rounded-xl resize z-[99]"></div>
    </div>
  );
}

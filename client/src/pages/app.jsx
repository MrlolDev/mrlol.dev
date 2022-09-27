import HeadPartial from "@/components/HeadPartial";
import TaskBar from "@/components/TaskBar";
import { useTheme } from "next-themes";
import Desktop from "@/components/Desktop";
import Window from "@/components/Window";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <HeadPartial />
      <Window title="Home" />
      <Desktop />
      <TaskBar />
      {/*
      {theme == "dark" ? (
        <i
          className="fa-solid fa-sun"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ></i>
      ) : (
        <i
          className="fa-solid fa-moon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ></i>
      )}
  */}
    </>
  );
}

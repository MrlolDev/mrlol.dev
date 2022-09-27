import HeadPartial from "@/components/HeadPartial";
import TaskBar from "@/components/TaskBar";
import { useTheme } from "next-themes";
import ButtonPrimary from "@/components/Buttons/Primary";
import InputText from "@/components/Inputs/Text";
import InputPassword from "@/components/Inputs/Password";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  var [page, setPage] = useState(1);
  var [username, setUsername] = useState(null);
  var [pin, setPin] = useState(null);
  return (
    <>
      <HeadPartial />
      <div className="flex flex-col items-center justify-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <img src="/gem.svg" className="animate-bounce" />
        {page == 1 ? (
          <>
            <h1 className="text-4xl font-bold ">lolOS</h1>
            <InputText
              placeholder="Username"
              id="username"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  // Cancel the default action, if needed
                  event.preventDefault();
                  // Trigger the button element with a click
                  document.getElementById("usernameBtn").click();
                }
              }}
            />
            <ButtonPrimary
              id="usernameBtn"
              onClick={() => {
                setUsername(document.getElementById("username").value);
                document.getElementById("username").value = "";
                setPage(2);
              }}
            >
              Continue <i className="fa-solid fa-angles-right"></i>
            </ButtonPrimary>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold ">Welcome, {username}</h1>
            <InputPassword
              placeholder="PIN(4-6numbers)"
              id="pin"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  // Cancel the default action, if needed
                  event.preventDefault();
                  // Trigger the button element with a click
                  document.getElementById("pinBtn").click();
                }
              }}
            />
            <ButtonPrimary
              id="pinBtn"
              onClick={() => {
                setPin(document.getElementById("pin").value);
                document.getElementById("pin").value = "";
                window.location = "/app";
              }}
            >
              Log In <i className="fa-solid fa-angles-right"></i>
            </ButtonPrimary>
          </>
        )}
      </div>
    </>
  );
}

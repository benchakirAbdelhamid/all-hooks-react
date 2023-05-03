import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Login() {
  const themeContext = useContext(ThemeContext);
  //   console.log(themeContext);

  let style = {};
  if (themeContext.theme === "dark") {
    style = {
      background: "#000",
      color: "#fff",
    };
  } else {
    style = {
      background: "#fff",
      color: "blue",
    };
  }

  return (
    <div style={style}>
      Header
      <hr />
    </div>
  );
}

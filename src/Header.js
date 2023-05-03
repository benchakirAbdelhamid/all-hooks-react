import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Header() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  let style = {};
  if (themeContext.theme === "dark") {
    style = {
      background: "blue",
      color: "#fff",
    };
  } else {
    style = {
      background: "#fff",
      color: "blue",
    };
  }

  return (
    <div
      // style={{ background: themeContext.theme === "dark" ? "blue" : "#fff" }}
      style={style}
    >
      Header
      <hr />
    </div>
  );
}

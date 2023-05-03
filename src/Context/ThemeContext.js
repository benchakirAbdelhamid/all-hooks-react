import React from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  toggleThemeBtn: () => {},
});

export default ThemeContext;

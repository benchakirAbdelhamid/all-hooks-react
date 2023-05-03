import React, { useState } from "react";

export const ThemeContext = React.createContext();
export function ThemeProvider(Props) {
  // state
  const [theme, setTheme] = useState("dark");
  // action function
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {Props.children}
    </ThemeContext.Provider>
  );
}

import { createContext, useState } from "react";

const THEME = {
  light: {
    fontSize: "4rem",
    color: "#111",
    backgroundColor: "#eee",
  },
  dark: {
    fontSize: "4rem",
    color: "#eee",
    backgroundColor: "#111",
  },
};

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        key: themeKey,
        theme: THEME[themeKey],
        changeTheme: setThemeKey,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

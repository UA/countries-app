import React, { FC, useEffect, useState } from "react";

interface Theme {
  theme: "light" | "dark";
  changeTheme?: () => void;
}
export const ThemeContext = React.createContext<Theme>({ theme: "light" });

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme["theme"]>("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
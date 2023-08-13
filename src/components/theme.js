import React, { useEffect, useMemo, useState } from "react";
import { createContext } from "react";
const ThemeContext = createContext({});
// TODO SSR怎么获取用户theme偏好
const isBrowser = typeof window !== "undefined";
const Theme = (props) => {
  const { children } = props;
  const defaultTheme = useMemo(() => {
    return (isBrowser && localStorage.getItem("theme")) || "light";
  }, []);
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector(":root")?.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.classList.add(theme);
  }, [theme]);
  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme } },
    children,
  );
};
export default Theme;
export { ThemeContext };

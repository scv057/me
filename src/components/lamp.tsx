import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import classNames from "classnames";

/**
 * @description theme controller
 */
const Lamp: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        "--x-lamp",
        "fixed",
        "z-10",
        "top-1/3",
        "right-[4vw]",
        "h-1/3",
        "w-[0.5vw]",
        "rounded-[2vh]",
        "cursor-pointer",
        "dark:--x-shadow",
      )}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    />
  );
};

export default Lamp;

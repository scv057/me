import React, { useContext } from "react";
import { ThemeContext } from "./theme";
import classNames from "classnames";

/**
 * @description theme controller
 */
const Lamp: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const clickHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={classNames(
          // "sm:visible",
          // "invisible",
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
        onClick={clickHandler}
      />
      {/*<div*/}
      {/*  className={classNames(*/}
      {/*    "visible",*/}
      {/*    "sm:invisible",*/}
      {/*    "w-6",*/}
      {/*    "h-3",*/}
      {/*    "top-3",*/}
      {/*    "right-2",*/}
      {/*    "rounded-6",*/}
      {/*    "dark:bg-white",*/}
      {/*    "bg-black",*/}
      {/*    "fixed",*/}
      {/*    "z-10",*/}
      {/*  )}*/}
      {/*  onClick={clickHandler}*/}
      {/*>*/}
      {/*</div>*/}
    </>
  );
};

export default Lamp;

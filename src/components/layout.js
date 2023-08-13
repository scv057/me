import React from "react";
import "../pages/index.module.css";
import Lamp from "./lamp";
import Theme from "./theme";
import classNames from "classnames";
const MidLayout = ({ slots: { mid } }) => {
  return React.createElement(
    "div",
    { className: classNames("container", "mx-auto", "px-2") },
    mid,
  );
};
const LRLayout = ({ slots: { left, right } }) => {
  return React.createElement(
    "div",
    { className: classNames("flex", "flex-row", "flex-wrap", "py-4") },
    React.createElement(
      "aside",
      { className: classNames("w-full", "sm:w-1/3", "md:w-1/4", "px-2") },
      React.createElement(
        "div",
        { className: "sticky top-0 w-full p-4" },
        left,
      ),
    ),
    React.createElement(
      "main",
      {
        role: "main",
        className: classNames("w-full", "sm:w-2/3", "md:w-3/4", "pt-1", "px-2"),
      },
      right,
    ),
  );
};
const Layout = (props) => {
  const { layout, slots } = props;
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Theme,
      null,
      React.createElement(Lamp, null),
      layout === "lr"
        ? React.createElement(LRLayout, { slots: slots })
        : React.createElement(MidLayout, { slots: slots }),
    ),
  );
};
export default Layout;

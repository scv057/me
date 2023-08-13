import React from "react";
import classNames from "classnames";
const Label = ({ text }) => {
  return React.createElement(
    "div",
    {
      className: classNames("half-shadow-[2px_2px]", "--x-label", "primary/30"),
      key: text,
    },
    text,
  );
};
export default Label;

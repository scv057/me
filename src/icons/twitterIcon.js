import React from "react";
const TwitterIcon = (props) => {
  const { color = "inherit" } = props;
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", width: "1em", height: "1em" },
    React.createElement("path", {
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66\n  10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5\n  4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
      fill: color,
    }),
  );
};
export default TwitterIcon;

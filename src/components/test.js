import React from "react";
const Test = (props) => {
  const { content, children } = props;
  return React.createElement("div", null, content);
};
export default Test;

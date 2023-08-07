import React from "react";
import classNames from "classnames";

interface ILabelProps {
  text: string;
}

const Label: React.FC<ILabelProps> = ({ text }) => {
  return (
    <div
      className={classNames("half-shadow-[2px-2px]", "--x-label", "primary/30")}
      key={text}
    >
      {text}
    </div>
  );
};

export default Label;

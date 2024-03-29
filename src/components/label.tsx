import React from "react";
import classNames from "classnames";

interface ILabelProps {
  text: string;
}

const Label: React.FC<ILabelProps> = ({ text }) => {
  return (
    <div className={classNames("--x-label")} key={text}>
      {text}
    </div>
  );
};

export default Label;

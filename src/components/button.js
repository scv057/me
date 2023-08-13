import React from "react";
import * as styles from "./button.module.css";
import { Link } from "gatsby";
import classNames from "classnames";
const LinkButton = (props) => {
  const { href, children } = props;
  return React.createElement(
    "li",
    null,
    React.createElement(
      Link,
      {
        className: classNames(
          "mr-[0.6rem]",
          "mb-[1.2rem]",
          "px-2",
          "py-1",
          "border-[4px]",
          "border-solid",
          "border-[--link-color]",
          "duration-100",
          "ease-linear",
          "font-medium",
          "cursor-pointer",
          "no-underline",
          "inline-block",
          styles.link,
        ),
        to: href,
      },
      children,
    ),
  );
};
const AButton = (props) => {
  const { href, children } = props;
  return React.createElement(
    "li",
    null,
    React.createElement(
      "a",
      {
        className: classNames(
          "mr-[0.6rem]",
          "mb-[1.2rem]",
          "px-2",
          "py-1",
          "border-[4px]",
          "border-solid",
          "border-[--link-color]",
          "duration-100",
          "ease-linear",
          "font-medium",
          "cursor-pointer",
          "no-underline",
          "inline-block",
          styles.link,
        ),
        href: href,
      },
      children,
    ),
  );
};
const Button = (props) => {
  const { type } = props;
  // TODO: 添加不同功能样式的button
  switch (type) {
    case "link":
      return React.createElement(LinkButton, { ...props });
    case "a":
      return React.createElement(AButton, { ...props });
    default:
      return React.createElement(LinkButton, { ...props });
  }
};
export default Button;

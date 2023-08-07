import React from "react";
import * as styles from "./button.module.css";
import { Link } from "gatsby";
import classNames from "classnames";

interface Interface {
  href: string;
  type: string;
}

const LinkButton: React.FC<Interface> = (props) => {
  const { href, children } = props;

  return (
    <li>
      <Link
        className={classNames(
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
        )}
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};

const AButton: React.FC<Interface> = (props) => {
  const { href, children } = props;

  return (
    <li>
      <a
        className={classNames(
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
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

const Button: React.FC<Interface> = (props) => {
  const { type } = props;
  // TODO: 添加不同功能样式的button
  switch (type) {
    case "link":
      return <LinkButton {...props} />;
    case "a":
      return <AButton {...props} />;
    default:
      return <LinkButton {...props} />;
  }
};

export default Button;

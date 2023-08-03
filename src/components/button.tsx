import React from "react";
import * as styles from "./button.module.css";
import { Link } from "gatsby";

interface Interface {
  href: string;
  type: string;
}

const LinkButton: React.FC<Interface> = (props) => {
  const { href, children } = props;

  return (
    <li>
      <Link className={styles.link} to={href}>
        {children}
      </Link>
    </li>
  );
};

const Button: React.FC<Interface> = (props) => {
  const { type } = props;
  // TODO: 添加不同功能样式的button
  switch (type) {
    case "link":
      return <LinkButton {...props} />;
    default:
      return <LinkButton {...props} />;
  }
};

export default Button;

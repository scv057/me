import React from "react";
import { Link } from "gatsby";

interface Interface {
  href: string;
  type: string;
}

const LinkButton: React.FC<Interface> = (props) => {
  const { href, children, className } = props;

  return (
    <li>
      <Link className={className} to={href}>
        {children}
      </Link>
    </li>
  );
};

const AButton: React.FC<Interface> = (props) => {
  const { href, children, className } = props;

  return (
    <li>
      <a className={className} href={href}>
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

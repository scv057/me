import React, { useState } from "react";
import Button from "./button";
import Icons from "../icons/icons";
import classNames from "classnames";

export interface ILinkProps {
  content: any;
  href: string;
}

interface IHeaderProps {
  direction?: "row" | "col";
}
const { TwitterIcon, GithubIcon, YoutubeIcon } = Icons;

const textLinks: Array<ILinkProps> = [
  { content: "Index", href: "/" },
  { content: "About", href: "/about" },
  { content: "Writings", href: "/blog" },
  // { content: "Talks", href: "/talk" },
  { content: "Notes", href: "/note" },
  // { content: "Newsletter", href: "/newsletter" },
];

const iconLinks = [
  { content: <TwitterIcon />, href: "/about" },
  { content: <GithubIcon />, href: "https://github.com/scv057" },
  { content: <YoutubeIcon />, href: "/about" },
];

const Nav: React.FC<IHeaderProps> = (props) => {
  const { direction = "row" } = props;

  const [display, setDisplay] = useState("hidden");

  const toggle = function () {
    setDisplay(display === "hidden" ? "flex" : "hidden");
  };

  return (
    <nav className={classNames("flex", "flex-col")}>
      <button
        className={classNames(
          "text-white",
          "block",
          { hidden: direction === "row" },
          "sm:hidden",
        )}
        onClick={toggle}
      >
        Menu
      </button>
      <ul
        className={classNames(
          "flex",
          "sm:flex",
          `flex-${direction}`,
          "gap-2",
          { [`${display}`]: direction === "col" },
          { "lg:gap-12": direction === "row" },
          "justify-center",
        )}
      >
        {textLinks.map(({ href, content }, index) => {
          return (
            <Button href={href} type={"link"} key={index}>
              {content}
            </Button>
          );
        })}
      </ul>
      <ul
        className={classNames(
          "flex-row",
          "flex",
          "sm:flex",
          { [`${display}`]: direction === "col" },
          "lg:space-x-4",
          {
            "justify-center": direction === "row",
          },
        )}
      >
        {iconLinks.map(({ href, content }, index) => {
          return (
            <Button key={index} href={href} type={"a"}>
              {content}
            </Button>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

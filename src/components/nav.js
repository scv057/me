import React from "react";
import Button from "./button";
import Icons from "../icons/icons";
import classNames from "classnames";
const { TwitterIcon, GithubIcon, YoutubeIcon } = Icons;
const textLinks = [
  { content: "Index", href: "/" },
  { content: "About", href: "/about" },
  { content: "Writings", href: "/blog" },
  { content: "Talks", href: "/talk" },
  { content: "Notes", href: "/note" },
  { content: "Newsletter", href: "/newsletter" },
];
const iconLinks = [
  { content: React.createElement(TwitterIcon, null), href: "/about" },
  {
    content: React.createElement(GithubIcon, null),
    href: "https://github.com/scv057",
  },
  { content: React.createElement(YoutubeIcon, null), href: "/about" },
];
const Nav = (props) => {
  const { direction = "row" } = props;
  return React.createElement(
    "nav",
    { className: classNames("flex", "flex-col") },
    React.createElement(
      "ul",
      { className: classNames("flex", `flex-${direction}`, "justify-evenly") },
      textLinks.map(({ href, content }, index) => {
        return React.createElement(
          Button,
          { href: href, type: "link", key: index },
          content,
        );
      }),
    ),
    React.createElement(
      "ul",
      {
        className: classNames("flex", "flex-row", "lg:space-x-4", "mt-8", {
          "justify-center": direction === "row",
        }),
      },
      iconLinks.map(({ href, content }, index) => {
        return React.createElement(
          Button,
          { key: index, href: href, type: "a" },
          content,
        );
      }),
    ),
  );
};
export default Nav;

import React from "react";
import Layout from "../components/layout";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/nav";
import classNames from "classnames";
import SEO from "../components/seo";
const url =
  "https://s1.vika.cn/space/2022/05/05/2c7a8d84127b49ab870d110a958dc9bb?attname=images.jpeg";
const Content = () => {
  return React.createElement(
    "div",
    { className: classNames("flex", "flex-col", "h-screen", "justify-center") },
    React.createElement(StaticImage, {
      className: classNames(styles.avatar, "aspect-square", "mb-10", "mx-auto"),
      src: url,
      alt: "avatar",
    }),
    React.createElement(
      "p",
      {
        className: classNames("text-4xl", "text-center", "mt-8", styles.title),
      },
      " ",
      "Andrew Xie",
      " ",
    ),
    React.createElement(
      "p",
      {
        className: classNames(
          "text-2xl",
          "text-center",
          "mt-8",
          "mb-8",
          styles.intro,
        ),
      },
      "Frontend Developer who is unemployed",
      " ",
    ),
    React.createElement(Nav, null),
  );
};
const IndexPage = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Layout, {
      pageTitle: "Index",
      type: "mid",
      slots: { mid: React.createElement(Content, null) },
    }),
  );
};
export default IndexPage;
export const Head = () => {
  return React.createElement(SEO, null);
};

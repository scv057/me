import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import { graphql, useStaticQuery } from "gatsby";
import classNames from "classnames";
const contents = [
  "🀄️ My name is 谢杨浩",
  React.createElement(
    React.Fragment,
    null,
    "\u6211\u5728",
    React.createElement("a", { href: "http://www.baidu.com" }, "\u7B49\u4F60"),
  ),
];
const Content = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      mdx(id: { eq: "45fdd8f0-7cc6-5327-8751-f11dbfbd836d" }) {
        frontmatter {
          author
          title
          date(formatString: "MMMM D, YYYY")
        }
        body
      }
    }
  `);
  return React.createElement(
    "article",
    { className: classNames("prose", "dark:prose-invert") },
    React.createElement("h1", null, data?.mdx?.frontmatter?.title),
    React.createElement(
      "ol",
      null,
      contents.map((content, index) => {
        return React.createElement("li", { key: index }, content);
      }),
    ),
  );
};
const AboutPage = () => {
  return React.createElement(Layout, {
    layout: "lr",
    slots: {
      left: React.createElement(Nav, { direction: "col" }),
      right: React.createElement(Content, null),
    },
  });
};
export default AboutPage;

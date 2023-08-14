import React from "react";
import Layout from "../../components/layout";
import Nav from "../../components/nav";
import classNames from "classnames";
import SEO from "../../components/seo";

const Content: React.FC = () => {
  return (
    <article className={classNames("prose", "dark:prose-invert")}>
      <h1>About Me</h1>
      <p>Hi, I am Andrew Xie, a frontend developer.</p>
      <p>Working experiences:</p>
      <p>Passions:</p>
      <p>Find me on</p>
      <ul>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">YouTube</a>
        </li>
      </ul>
    </article>
  );
};

const AboutPage = () => {
  return (
    <Layout
      layout={"lr"}
      slots={{ left: <Nav direction={"col"} />, right: <Content /> }}
    />
  );
};

export default AboutPage;

export const Head = () => {
  return <SEO title={"about me"} />;
};

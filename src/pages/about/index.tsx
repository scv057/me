import React from "react";
import Layout from "../../components/layout";
// import * as styles from './index.module.css';
import Nav from "../../components/nav";
import { graphql, useStaticQuery } from "gatsby";
import classNames from "classnames";

const contents: Array<string | JSX.Element> = [
  "🀄️ My name is 谢杨浩",
  <>
    我在<a href={"http://www.baidu.com"}>等你</a>
  </>,
];

const Content: React.FC = () => {
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

  return (
    <article className={classNames("prose", "dark:prose-invert")}>
      <h1>{data?.mdx?.frontmatter?.title}</h1>
      <ol>
        {contents.map((content, index) => {
          return <li key={index}>{content}</li>;
        })}
      </ol>
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

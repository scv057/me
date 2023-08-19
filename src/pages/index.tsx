import React from "react";
import Layout from "../components/layout";
import * as styles from "./index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/nav";
import classNames from "classnames";
import Seo from "../components/seo";

const url =
  "https://s1.vika.cn/space/2022/05/05/2c7a8d84127b49ab870d110a958dc9bb?attname=images.jpeg";

const Content = () => {
  return (
    <div
      className={classNames("flex", "flex-col", "h-screen", "justify-center")}
    >
      <StaticImage
        className={classNames(
          styles.avatar,
          "aspect-square",
          "mb-10",
          "mx-auto",
        )}
        src={url}
        alt="avatar"
      />
      <p
        className={classNames("text-4xl", "text-center", "mt-8", styles.title)}
      >
        {" "}
        Andrew Xie{" "}
      </p>
      <p
        className={classNames(
          "text-2xl",
          "text-center",
          "mt-8",
          "mb-8",
          styles.intro,
        )}
      >
        Frontend Developer
      </p>
      <Nav />
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle={"Index"} type={"mid"} slots={{ mid: <Content /> }} />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo />;
};

import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import naruto from "../../static/images/naruto.jpg";
const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${naruto}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("title", null, seo.title),
    React.createElement("meta", {
      name: "description",
      content: seo.description,
    }),
    React.createElement("meta", { name: "image", content: seo.image }),
    React.createElement("meta", {
      name: "twitter:card",
      content: "summary_large_image",
    }),
    React.createElement("meta", { name: "twitter:title", content: seo.title }),
    React.createElement("meta", { name: "twitter:url", content: seo.url }),
    React.createElement("meta", {
      name: "twitter:description",
      content: seo.description,
    }),
    React.createElement("meta", { name: "twitter:image", content: seo.image }),
    React.createElement("meta", {
      name: "twitter:creator",
      content: seo.twitterUsername,
    }),
    React.createElement("meta", { name: "og:title", content: seo.title }),
    React.createElement("meta", { name: "og:type", content: "website" }),
    React.createElement("meta", { name: "og:url", content: seo.url }),
    React.createElement("meta", { name: "og:image", content: seo.image }),
    React.createElement("link", {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>\uD83D\uDC64</text></svg>",
    }),
    children,
  );
};
export default SEO;

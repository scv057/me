import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import naruto from "../../static/images/naruto.jpg";
import yellowCat from "../../static/images/yellow-cat-128.png";

const Seo = ({ title, description, pathname, children }) => {
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
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:image" content={seo.image} />
      <link rel="icon" href={yellowCat} />
      {children}
    </>
  );
};

export default Seo;

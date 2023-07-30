import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// TODO: twitter og: improve SEO and sharing experience

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  return <title>{title | data.site.siteMetadata.title}</title>;
};

export default Seo;

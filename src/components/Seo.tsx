import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// TODO: twitter og: improve SEO and sharing experience

const Seo = ({title}) => {
    const data = useStaticQuery(query)
    return (
        <title>{ title | data.site.siteMetadata.title }</title>
    );
}

const query = graphql`query MyQuery {
  site {
    siteMetadata {
      description
      siteUrl
      title
    }
  }
}`;
export default Seo

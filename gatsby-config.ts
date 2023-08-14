import type { GatsbyConfig } from "gatsby";

const { remarkCodeHike } = require("@code-hike/mdx");

let siteUrl = "https://www.heady.fun";

if (process.env.NODE_ENV === "dev") {
  siteUrl = "http://localhost:8000";
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `找自己`,
    siteUrl: siteUrl,
    description: `找自己`,
    image: `${siteUrl}`,
    twitterUsername: "scv001",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
        },
      },
    },
  ],
};

export default config;

import type { GatsbyConfig } from "gatsby";

const { remarkCodeHike } = require("@code-hike/mdx");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `找自己`,
    siteUrl: `https://www.heady.fun`,
    description: `找自己`,
    image:
      "https://s1.vika.cn/space/2022/04/29/00811ddbb3684b58868ab6efc499b250",
  },
  // flags: {
  //   DEV_SSR: true
  // },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/src/pages/about`,
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

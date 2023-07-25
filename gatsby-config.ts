import type { GatsbyConfig } from "gatsby"

const {remarkCodeHike} = require("@code-hike/mdx");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `找自己`,
    siteUrl: `https://www.zhaoziji.me`,
    description: `找自己`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${ __dirname }/blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `about`,
        path: `${ __dirname }/src/pages/about`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [ `.mdx`, `.md` ],
        mdxOptions: {
          remarkPlugins: [ [ remarkCodeHike, {theme: "material-palenight"} ] ],
        },
      },
    },
  ],
}

export default config

import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `找自己`,
    siteUrl: `https://www.zhaoziji.me`,
    description: `找自己`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${ __dirname }/blog`
      }
    },
    "gatsby-plugin-mdx",
  ],
}

export default config

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Julian Salvador`,
    description: `Get to know Julian Salvador, a Front-End Developer passionate about creating innovative and user-friendly web experiences. Explore skills, projects, and more.`,
    copyright: "© 2024 Julian Salvador. All rights reserved.",
    author: `Julian Salvador <tech.julian.salvador@gmail.com>`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julian Salvador Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#181818`,
        theme_color: `#ededed`,
        display: `standalone`,
        icon: `src/images/Logo.png`,
      },
    },
  ],
}

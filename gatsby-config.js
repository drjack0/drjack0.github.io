require("dotenv").config({
  //path: `.env.${process.env.NODE_ENV}`,
  path: ".env"
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.drjack0.github.io'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DrJack0 Personal Webpage`,
        short_name: `DrJack0`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7f449d`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.drjack0.github.io',
        sitemap: 'https://www.drjack0.github.io/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};

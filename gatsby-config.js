require("dotenv").config({
  path: ".env"
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://drjack0.github.io'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
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
        name: `Matteo Giaccone | DrJack0 | Developer`,
        short_name: `DrJack0`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7f449d`,
        display: `standalone`,
        icon: 'src/images/logos/site_logo_nobg.png',
      },
    },
  ],
};

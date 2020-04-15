module.exports = {
  siteMetadata: {
    title: `Gatsby Test`,
    description: `It's Sample Application`,
    author: `warlock-mw`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        url: `https://qiita.com/api/v2/items`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        name: `qiita`,
        entityLevel: ``,
        refreshId: `id`,
        verboseOutput: true,
        skipCreateNode: false,
        auth: false,
      }
    }
  ],
}

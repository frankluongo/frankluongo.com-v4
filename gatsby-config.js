const {
  moduleResolver,
  imagesSrc,
  postsSrc,
  mdxPlugin,
} = require("./config/plugins")

module.exports = {
  siteMetadata: {
    title: `Frank Luongo Design Co.`,
    description: `Your friendly internet web developer`,
    author: `@frankluongo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    imagesSrc(__dirname),
    postsSrc(__dirname),
    mdxPlugin,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `frank-luongo-design-co`,
        short_name: `fldc`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    moduleResolver,
  ],
}

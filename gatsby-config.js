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
    `gatsby-plugin-image`,
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
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    moduleResolver,
  ],
}

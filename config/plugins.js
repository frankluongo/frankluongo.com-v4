exports.moduleResolver = {
  resolve: "gatsby-plugin-module-resolver",
  options: {
    root: "./src", // <- will be used as a root dir
    aliases: {
      "@components": "./components", // <- will become ./src/components
      "@constants": "./constants", // <- will become ./src/components
      "@global": "./components/Global", // <- will become ./src/components
      "@helpers": "./helpers", // <- will become ./src/helpers
      "@hooks": "./hooks", // <- will become ./src/helpers
      static: {
        root: "./public", // <- will used as this alias' root dir
        alias: "./static", // <- will become ./public/static
      },
    },
  },
}

exports.moduleResolver = {
  resolve: "gatsby-plugin-module-resolver",
  options: {
    root: "./src", // <- will be used as a root dir
    aliases: {
      "@components": "./components",
      "@contact": "./components/Contact",
      "@constants": "./constants",
      "@global": "./components/Global",
      "@lib": "./lib",
      "@helpers": "./helpers",
      "@home": "./components/Home",
      "@hooks": "./hooks",
      static: {
        root: "./public", // <- will used as this alias' root dir
        alias: "./static", // <- will become ./public/static
      },
    },
  },
}

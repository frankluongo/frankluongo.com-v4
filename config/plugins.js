exports.moduleResolver = {
  resolve: "gatsby-plugin-module-resolver",
  options: {
    root: "./src", // <- will be used as a root dir
    aliases: {
      "@blog": "./components/Blog",
      "@components": "./components",
      "@contact": "./components/Contact",
      "@constants": "./constants",
      "@context": "./context",
      "@global": "./components/Global",
      "@lib": "./lib",
      "@helpers": "./helpers",
      "@home": "./components/Home",
      "@hooks": "./hooks",
      "@project": "./components/Project",
      "@post": "./components/Post",
      "@projects": "./components/Projects",
      static: {
        root: "./public", // <- will used as this alias' root dir
        alias: "./static", // <- will become ./public/static
      },
    },
  },
}

exports.imagesSrc = root => ({
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${root}/src/images`,
  },
})

exports.postsSrc = root => ({
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: `${root}/src/posts/`,
  },
})

// exports.projectsSrc = root => ({
//   resolve: `gatsby-source-filesystem`,
//   options: {
//     name: `projects`,
//     path: `${root}/src/projects/`,
//   },
// })

exports.mdxPlugin = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    extensions: [`.mdx`, `.md`],
  },
}

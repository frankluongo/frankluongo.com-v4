exports.moduleResolver = {
  resolve: "gatsby-plugin-module-resolver",
  options: {
    root: "./src", // <- will be used as a root dir
    aliases: {
      "#blog": "./components/Blog",
      "#components": "./components",
      "#contact": "./components/Contact",
      "#context": "./context",
      "#global": "./components/Global",
      "#home": "./components/Home",
      "#hooks": "./hooks",
      "#lib": "./lib",
      "#post": "./components/Post",
      "#project": "./components/Project",
      "#projects": "./components/Projects",
      "#utils": "./utils",
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
    path: `${root}/src/assets/images`,
  },
})

exports.postsSrc = root => ({
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: `${root}/src/assets/posts/`,
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

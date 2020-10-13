const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/SinglePost.js`)

  const posts = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              slug
              image
            }
          }
        }
      }
    }
  `)
  if (posts.errors) return reporter.panicOnBuild(`Derp!`)

  posts.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
        image: node.frontmatter.image,
      },
    })
  })
}

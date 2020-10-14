import { useStaticQuery, graphql } from "gatsby"

export function useBlogPosts() {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              date
              excerpt
              tags
              slug
              title
              imagePath {
                childImageSharp {
                  fluid(maxWidth: 320) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  if (!data?.allMdx?.edges) {
    throw new Error("no posts found")
  }
  const formattedPosts = formatPosts(data?.allMdx?.edges);
  return formattedPosts

  function formatPosts(posts) {
    return posts.map(formatPost);
  }

  function formatPost(post) {
    const { frontmatter, id } = post.node;
    const tags = frontmatter.tags.replace(/\s/g, "").split(",")
    return {
      frontmatter,
      tags,
      id
    }
  }
}

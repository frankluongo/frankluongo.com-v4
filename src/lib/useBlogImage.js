import { useStaticQuery, graphql } from "gatsby"

export function useBlogImage() {
  const data = useStaticQuery(graphql`
    query {
      blogImage: file(relativePath: { eq: "mouse-shot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.blogImage?.childImageSharp?.fluid) {
    throw new Error("no image found")
  }
  return data.blogImage.childImageSharp.fluid
}

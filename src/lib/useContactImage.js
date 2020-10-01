import { useStaticQuery, graphql } from "gatsby"

export function useContactImage() {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "toys-shot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.contactImage?.childImageSharp?.fluid) {
    throw new Error("no image found")
  }
  return data.contactImage.childImageSharp.fluid
}

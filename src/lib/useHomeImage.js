import { useStaticQuery, graphql } from "gatsby"

export function useHomeImage() {
  const data = useStaticQuery(graphql`
    query {
      homeImage: file(relativePath: { eq: "desk-shot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.homeImage?.childImageSharp?.fluid) {
    throw new Error("no image found")
  }
  return data.homeImage.childImageSharp.fluid
}

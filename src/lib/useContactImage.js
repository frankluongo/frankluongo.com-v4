import { useStaticQuery, graphql } from "gatsby"

export function useContactImage() {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "toys-shot.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return data.contactImage
}

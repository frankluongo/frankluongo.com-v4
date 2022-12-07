import { useStaticQuery, graphql } from "gatsby"

export function useHomeImage() {
  const data = useStaticQuery(graphql`
    query {
      homeImage: file(relativePath: { eq: "desk-shot.jpg" }) {
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

  return data.homeImage
}

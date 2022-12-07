import { useStaticQuery, graphql } from "gatsby"

export function useCutout() {
  const data = useStaticQuery(graphql`
    query {
      cutout: file(relativePath: { eq: "cutout-me.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 380
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const cutoutImg = data?.cutout?.childImageSharp
  if (!cutoutImg) throw new Error("no image(s) found")
  return data.cutout
}

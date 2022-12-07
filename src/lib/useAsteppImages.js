import { useStaticQuery, graphql } from "gatsby"

export function useAsteppImages() {
  const data = useStaticQuery(graphql`
    query {
      bio: file(relativePath: { eq: "projects/aliciastepp/astepp-bio.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contactsheet: file(
        relativePath: { eq: "projects/aliciastepp/astepp-contactsheet.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery: file(
        relativePath: { eq: "projects/aliciastepp/astepp-gallery.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      overview: file(
        relativePath: { eq: "projects/aliciastepp/astepp-overview.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.overview?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { overview, gallery, contactsheet, bio } = data

  return {
    overview: overview.childImageSharp.fluid,
    gallery: gallery.childImageSharp.fluid,
    contactsheet: contactsheet.childImageSharp.fluid,
    bio: bio.childImageSharp.fluid,
  }
}

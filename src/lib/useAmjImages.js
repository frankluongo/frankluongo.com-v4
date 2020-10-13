import { useStaticQuery, graphql } from "gatsby"

export function useAmjImages() {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "amj/amj-about.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      filters: file(relativePath: { eq: "amj/amj-filters.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "amj/amj-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.about?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { about, filters, hero } = data;

  return {
    about: about.childImageSharp.fluid,
    filters: filters.childImageSharp.fluid,
    hero: hero.childImageSharp.fluid,
  }
}

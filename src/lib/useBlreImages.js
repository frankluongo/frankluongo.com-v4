import { useStaticQuery, graphql } from "gatsby"

export function useBlreImages() {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "blre/blre-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      callout: file(relativePath: { eq: "blre/blre-callout.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ui: file(relativePath: { eq: "blre/blre-interface.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.hero?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { hero, callout, ui } = data;

  return {
    hero: hero.childImageSharp.fluid,
    callout: callout.childImageSharp.fluid,
    ui: ui.childImageSharp.fluid
  }
}

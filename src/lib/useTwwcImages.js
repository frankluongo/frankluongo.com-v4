import { useStaticQuery, graphql } from "gatsby"

export function useTwwcImages() {
  const data = useStaticQuery(graphql`
    query {
      footer: file(relativePath: { eq: "twwc/twwc-footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "twwc/twwc-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ui: file(relativePath: { eq: "twwc/twwc-ui.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.footer?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { footer, hero, ui } = data;

  return {
    footer: footer.childImageSharp.fluid,
    hero: hero.childImageSharp.fluid,
    ui: ui.childImageSharp.fluid,
  }
}

import { useStaticQuery, graphql } from "gatsby"

export function useJaiImages() {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "jai/jai-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      services: file(relativePath: { eq: "jai/jai-services.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ui: file(relativePath: { eq: "jai/jai-ui.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.home?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { home, services, ui } = data;

  return {
    home: home.childImageSharp.fluid,
    services: services.childImageSharp.fluid,
    ui: ui.childImageSharp.fluid,
  }
}

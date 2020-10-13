import { useStaticQuery, graphql } from "gatsby"

export function useLoresImages() {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "lores/lores-home.png" }) {
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
  const { home } = data;

  return {
    home: home.childImageSharp.fluid,
  }
}

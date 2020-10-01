import { useStaticQuery, graphql } from "gatsby"

export function useHeadshot() {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "aboutme-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.headshot?.childImageSharp?.fluid) {
    throw new Error("no image found")
  }
  return data.headshot.childImageSharp.fluid
}

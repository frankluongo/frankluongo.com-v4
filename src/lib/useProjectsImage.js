import { useStaticQuery, graphql } from "gatsby"

export function useProjectsImage() {
  const data = useStaticQuery(graphql`
    query {
      projectsImage: file(relativePath: { eq: "code-shot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.projectsImage?.childImageSharp?.fluid) {
    throw new Error("no image found")
  }
  return data.projectsImage.childImageSharp.fluid
}

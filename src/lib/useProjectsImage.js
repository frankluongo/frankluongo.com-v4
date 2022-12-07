import { useStaticQuery, graphql } from "gatsby"

export function useProjectsImage() {
  const data = useStaticQuery(graphql`
    query {
      projectsImage: file(relativePath: { eq: "code-shot.jpg" }) {
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
  return data.projectsImage
}

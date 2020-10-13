import { useStaticQuery, graphql } from "gatsby"

export function useMnsfImages() {
  const data = useStaticQuery(graphql`
    query {
      blog: file(relativePath: { eq: "mnsf/mnsf-blog.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      counter: file(relativePath: { eq: "mnsf/mnsf-counter.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      home: file(relativePath: { eq: "mnsf/mnsf-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shymaween: file(relativePath: { eq: "mnsf/mnsf-shymaween.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.blog?.childImageSharp?.fluid) {
    throw new Error("no image(s) found")
  }
  const { blog, counter, home, shymaween } = data;

  return {
    blog: blog.childImageSharp.fluid,
    counter: counter.childImageSharp.fluid,
    home: home.childImageSharp.fluid,
    shymaween: shymaween.childImageSharp.fluid,
  }
}

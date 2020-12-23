import { useStaticQuery, graphql } from "gatsby"

export function useMeta() {
  const data = useStaticQuery(graphql`
    query {
      site {
        meta: siteMetadata {
          title
          description
        }
      }
    }
  `)
  return data.site.meta
}

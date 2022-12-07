import { useStaticQuery, graphql } from "gatsby"

export function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      asteppLogo: file(
        relativePath: { eq: "projects/aliciastepp/astepp-logo.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      asteppFeat: file(
        relativePath: { eq: "projects/aliciastepp/astepp-gallery.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      amjLogo: file(relativePath: { eq: "projects/amj/amj-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      amjFeatImage: file(relativePath: { eq: "projects/amj/amj-hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      blreLogo: file(relativePath: { eq: "projects/blre/blre-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      blreFeatImage: file(
        relativePath: { eq: "projects/blre/blre-callout.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      jaiLogo: file(relativePath: { eq: "projects/jai/jai-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      jaiFeatImage: file(relativePath: { eq: "projects/jai/jai-home.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      loresLogo: file(relativePath: { eq: "projects/lores/lores-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      loresFeatImage: file(
        relativePath: { eq: "projects/lores/lores-home.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      mnsfLogo: file(relativePath: { eq: "projects/mnsf/mnsf-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      mnsfFeatImage: file(
        relativePath: { eq: "projects/mnsf/mnsf-shymaween.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      twwcLogo: file(relativePath: { eq: "projects/twwc/twwc-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      twwcFeatImage: file(relativePath: { eq: "projects/twwc/twwc-hero.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const {
    asteppLogo,
    asteppFeat,
    amjLogo,
    amjFeatImage,
    blreLogo,
    blreFeatImage,
    jaiLogo,
    jaiFeatImage,
    loresLogo,
    loresFeatImage,
    mnsfLogo,
    mnsfFeatImage,
    twwcLogo,
    twwcFeatImage,
  } = data

  return [
    {
      thumbnail: asteppLogo,
      feature: asteppFeat,
      id: 1,
      heading: "Alicia Stepp Photography",
      title: "Alicia Stepp Photography Website",
      url: "/projects/alicia-stepp-photography",
      tags: [
        "Client Work",
        "React",
        "Sass",
        "Squarespace",
        "Webpack",
        "WordPress",
        "Development",
      ],
    },
    {
      thumbnail: blreLogo,
      feature: blreFeatImage,
      id: 3,
      heading: "Brotherly Love Real Estate",
      title: "Brotherly Love Real Estate Website",
      url: "/projects/brotherly-love-real-estate",
      tags: [
        "Client Work",
        "Gatsby",
        "GraphQL",
        "React",
        "Sass",
        "Webpack",
        "WordPress",
        "Design",
        "Development",
      ],
    },
    {
      thumbnail: amjLogo,
      feature: amjFeatImage,
      id: 2,
      heading: "Angela Monaco Jewelry",
      title: "Angela Monaco Jewelry Website",
      url: "/projects/angela-monaco-jewelry",
      tags: ["Client Work", "Sass", "Shopify", "Webpack", "Development"],
    },
    {
      thumbnail: jaiLogo,
      feature: jaiFeatImage,
      id: 4,
      heading: "Jewelry Appraisals, Inc.",
      title: "Jewelry Appraisals, Inc. Website",
      url: "/projects/jewelry-appraisals-inc",
      tags: ["Client Work", "Sass", "WordPress", "Design", "Development"],
    },
    {
      thumbnail: loresLogo,
      feature: loresFeatImage,
      id: 5,
      heading: "Lore's Chocolates",
      title: "Lore's Chocolates Website",
      url: "/projects/lores-chocolates",
      tags: ["Client Work", "Webpack", "WordPress", "Development"],
    },
    {
      thumbnail: mnsfLogo,
      feature: mnsfFeatImage,
      id: 6,
      heading: "M. Night Shymalan Foundation",
      title: "M. Night Shymalan Foundation Website",
      url: "/projects/mnsfoundation",
      tags: ["Client Work", "Sass", "Webpack", "WordPress", "Development"],
    },
    {
      thumbnail: twwcLogo,
      feature: twwcFeatImage,
      id: 7,
      heading: "Twin Waves Wellness",
      title: "Twin Waves Wellness Website",
      url: "/projects/twin-waves-wellness",
      tags: [
        "Client Work",
        "Gatsby",
        "GraphQL",
        "React",
        "Sass",
        "Webpack",
        "WordPress",
        "Design",
        "Development",
      ],
    },
  ]
}

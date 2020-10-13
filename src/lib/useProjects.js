import { useStaticQuery, graphql } from "gatsby"

export function useProjects() {
  const data = useStaticQuery(graphql`
    query {
      asteppLogo: file(relativePath: { eq: "aliciastepp/astepp-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asteppFeat: file(relativePath: { eq: "aliciastepp/astepp-gallery.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amjLogo: file(relativePath: { eq: "amj/amj-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amjFeatImage: file(relativePath: { eq: "amj/amj-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blreLogo: file(relativePath: { eq: "blre/blre-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blreFeatImage: file(relativePath: { eq: "blre/blre-callout.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jaiLogo: file(relativePath: { eq: "jai/jai-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jaiFeatImage: file(relativePath: { eq: "jai/jai-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      loresLogo: file(relativePath: { eq: "lores/lores-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      loresFeatImage: file(relativePath: { eq: "lores/lores-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mnsfLogo: file(relativePath: { eq: "mnsf/mnsf-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mnsfFeatImage: file(relativePath: { eq: "mnsf/mnsf-shymaween.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twwcLogo: file(relativePath: { eq: "twwc/twwc-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twwcFeatImage: file(relativePath: { eq: "twwc/twwc-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
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
twwcFeatImage
   } = data;

  return [
    {
      thumbnail: asteppLogo.childImageSharp.fluid,
      feature: asteppFeat.childImageSharp.fluid,
      id: 1,
      heading: 'Alicia Stepp Photography',
      title: 'Alicia Stepp Photography Website',
      url: '/projects/alicia-stepp-photography',
      type: ['Client Work'],
      tech: ['React', 'Sass', 'Squarespace', 'Webpack', 'WordPress'],
      included: ['Development']
    },
    {
      thumbnail: blreLogo.childImageSharp.fluid,
      feature: blreFeatImage.childImageSharp.fluid,
      id: 3,
      heading: 'Brotherly Love Real Estate',
      title: 'Brotherly Love Real Estate Website',
      url: '/projects/brotherly-love-real-estate',
      type: ['Client Work'],
      tech: ['Gatsby', 'GraphQL', 'React', 'Sass', 'Webpack', 'WordPress'],
      included: ['Design', 'Development']
    },
    {
      thumbnail: amjLogo.childImageSharp.fluid,
      feature: amjFeatImage.childImageSharp.fluid,
      id: 2,
      heading: 'Angela Monaco Jewelry',
      title: 'Angela Monaco Jewelry Website',
      url: '/projects/angela-monaco-jewelry',
      type: ['Client Work'],
      tech: ['Sass', 'Shopify', 'Webpack'],
      included: ['Development']
    },
    {
      thumbnail: jaiLogo.childImageSharp.fluid,
      feature: jaiFeatImage.childImageSharp.fluid,
      id: 4,
      heading: 'Jewelry Appraisals, Inc.',
      title: 'Jewelry Appraisals, Inc. Website',
      url: '/projects/jewelry-appraisals-inc',
      type: ['Client Work'],
      tech: ['Sass', 'WordPress'],
      included: ['Design', 'Development']
    },
    {
      thumbnail: loresLogo.childImageSharp.fluid,
      feature: loresFeatImage.childImageSharp.fluid,
      id: 5,
      heading: 'Lore\'s Chocolates',
      title: 'Lore\'s Chocolates Website',
      url: '/projects/lores-chocolates',
      type: ['Client Work'],
      tech: ['Webpack', 'WordPress'],
      included: ['Development']
    },
    {
      thumbnail: mnsfLogo.childImageSharp.fluid,
      feature: mnsfFeatImage.childImageSharp.fluid,
      id: 6,
      heading: 'M. Night Shymalan Foundation',
      title: 'M. Night Shymalan Foundation Website',
      url: '/projects/mnsfoundation',
      type: ['Client Work'],
      tech: ['Sass', 'Webpack', 'WordPress'],
      included: ['Development']
    },
    {
      thumbnail: twwcLogo.childImageSharp.fluid,
      feature: twwcFeatImage.childImageSharp.fluid,
      id: 7,
      heading: 'Twin Waves Wellness',
      title: 'Twin Waves Wellness Website',
      url: '/projects/twin-waves-wellness',
      type: ['Client Work'],
      tech: ['Gatsby', 'GraphQL', 'React', 'Sass', 'Webpack', 'WordPress'],
      included: ['Design', 'Development']
    },
  ];
}

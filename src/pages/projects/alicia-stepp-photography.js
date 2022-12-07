import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import Img from "gatsby-image"

import Seo from "#global/Seo"
import { useAsteppImages } from "#lib"
import { Grid } from "#components/Common"
import Splash from "#components/Splash"
import Hero from "#components/Hero"

import MainContent from "#project/MainContent"

export default function AliciaSteppPhotography() {
  const { overview, gallery, contactsheet, bio } = useAsteppImages()
  return (
    <>
      <Seo title="Alicia Stepp Photography" />
      <Hero
        image={overview}
        headline={<span className="bold">Alicia Stepp Photography</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Alicia Stepp Photography</h2>
            <p className="h3 italic">
              Alicia Stepp is an internationally published, award—winning
              fashion, beauty and portrait photographer
            </p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
              After a frustrating encounter with a previous developer, Alicia
              Stepp reached out to me to help get her Photography website
              production ready.
            </p>
            <br />
            <h3 className="h3 black">The Solution</h3>
            <p>
              The website is built with Squarespace with some hefty theme
              modifications.
            </p>
            <br />
            {/* <StaticImage fluid={contactsheet} /> */}
            <br />
            <Grid xsCols="2" data-align-center>
              {/* <StaticImage fluid={gallery} /> */}
              <p>
                We implemented horizontal scrolling, CSS animations, and
                parallax effects to make the digital experience lively and
                engaging.
              </p>
            </Grid>
            <br />
            <p>
              Since the site launched, we’ve worked together to enhance the look
              and feel by upgrading the About Page to feel more on brand.
            </p>
            <br />
            <Grid xsCols="2" data-align-center>
              <p>
                All styling and JavaScript are done via webpack and then
                compiled for the site’s deployment.
              </p>
              {/* <StaticImage fluid={bio} /> */}
            </Grid>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p>
              <strong className="bold">Title</strong>: Alicia Stepp Photography
            </p>
            <p>
              <strong className="bold">Client</strong>: Alicia Stepp
            </p>
            <p>
              <strong className="bold">Tools</strong>: Squarespace, Webpack,
              ES6, Sass
            </p>
            <p>
              <strong className="bold">Deliverables</strong>: Development, UI,
              SEO
            </p>
          </aside>
        </Grid>
      </Splash>
    </>
  )
}

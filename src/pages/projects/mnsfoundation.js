import React from "react"
// import Img from "gatsby-image"

import Seo from "#global/Seo"
import { useMnsfImages } from "#lib"
import { Grid } from "#components/Common"
import Splash from "#components/Splash"
import Hero from "#components/Hero"

import MainContent from "#project/MainContent"

export default function Mnsfoundation() {
  const { blog, counter, home, shymaween } = useMnsfImages()
  return (
    <>
      <Seo title="M. Night Shyamalan Foundation" />
      <Hero
        image={home}
        headline={<span className="bold">M. Night Shyamalan Foundation</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">M. Night Shyamalan Foundation</h2>
            <p className="h3 italic">
              The M. Night Shyamalan Foundation supports the grassroots efforts
              of emerging leaders as they work to eliminate the barriers created
              by poverty and social injustice in their communities.
            </p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
              After a frustrating experience with a previous developer, the team
              at the M. Night Shyamalan Foundation pulled me in to help get
              their website ready for Shymaween, their annual Halloween
              fundraiser.
            </p>
            <br />
            <h3 className="h3 black">The Solution</h3>
            <p>
              Initially, I worked with the team at MNSF to button the website up
              and get it ready to accept donations for Shymaween. Once the dust
              had settled, we worked together to improve the website’s
              performance and appearance.
            </p>
            <br />
            {/* <Img fluid={counter} /> */}
            <br />
            <Grid xsCols="2" data-align-center>
              {/* <Img fluid={blog} /> */}
              <p>
                The site is built using a completely custom WordPress Theme and
                Advanced Custom Fields
              </p>
            </Grid>
            <br />
            <br />
            <Grid xsCols="2" data-align-center>
              <p>
                The most important and significant piece to this web presence is
                the annual Shymaween event, that accounts for a large amount of
                the foundations annual donations. Building and maintaining that
                experience has been a recurring project for us since 2017.
              </p>
              {/* <Img fluid={shymaween} /> */}
            </Grid>
            <br />
            <p>
              Now, the website is built using Webpack to compile a custom theme
              and custom plugin that are used to power the site’s functionality.
              All development is still done locally, and, when updates are
              required, a new version of the theme and/or plugin is released and
              uploaded to the website.
            </p>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p>
              <strong className="bold">Title</strong>: M. Night Shyamalan
              Foundation
            </p>
            <p>
              <strong className="bold">Client</strong>: M. Night Shyamalan
              Foundation
            </p>
            <p>
              <strong className="bold">Tools</strong>: WordPress, Webpack, ES6,
              Sass
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

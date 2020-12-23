import React from "react"
import Img from "gatsby-image"

import Seo from "@global/Seo"
import { useBlreImages } from "@lib"
import { Grid } from "@components/Common"
import Splash from "@components/Splash"
import Layout from "@global/Layout"
import Hero from "@components/Hero"

import MainContent from "@project/MainContent"

export default function BrotherlyLoveRealEstate() {
  const { hero, callout, ui } = useBlreImages()
  return (
    <Layout>
      <Seo title="Brotherly Love Real Estate" />
      <Hero
        image={hero}
        headline={<span className="bold">Brotherly Love Real Estate</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Brotherly Love Real Estate</h2>
            <p className="h3 italic">
              Helping people through one of the most important investment
              decisions of their lifetime by seamlessly providing fast, honest,
              and professional real estate services.
            </p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
              The founders of BLRE reached out to me to create their branding,
              bolster their online presence, and expand their reach in the
              Philadelphia area. We worked collaboratively to create a digital
              experience that would invite potential home sellers in, reassuring
              them every step of the way that they’re in good hands.
            </p>
            <br />
            <h3 className="h3 black">The Design</h3>
            <p>
              The challenge for Brotherly Love Real Estate was creating a brand
              that felt energetic and fun while maintaining a sense of
              professionalism.{" "}
            </p>
            <br />
            <Img fluid={hero} />
            <br />
            <Grid xsCols="2" data-align-center>
              <Img fluid={callout} />
              <p>
                We achieved a sense of professionalism through the use of a
                clean sans-serif as the primary typeface, and a sturdy slab
                serif as the secondary font. We injected some fun into the
                branding using pops of color, iconography, and gradients.
              </p>
            </Grid>
            <br />
            <p>
              The end result is a digital experience that tells visitors, “these
              guys are pros who take your business seriously, but they don’t
              take themselves too seriously.”
            </p>
            <br />
            <h3 className="h3 black">The Development</h3>
            <p>
              The site was originally built using Gatsby.js, using WordPress
              purely as a backend to serve up data. This initial version was
              hosted on Netlify and had webhooks set up to trigger redeploys on
              changes.
            </p>
            <br />
            <Grid xsCols="2" data-align-center>
              <p>
                However, as time progressed, the needs of the client outgrew the
                capabilities of the Gatsby Static Site. They needed more
                flexibility to build custom content for each page, so the
                decision was made to transfer the website over to a purely
                WordPress implementation.
              </p>
              <Img fluid={ui} />
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
              <strong>Title</strong>: Brotherly Love Real Estate Website
            </p>
            <p>
              <strong>Client</strong>: Brotherly Love Real Estate
            </p>
            <p>
              <strong>Tools</strong>: WordPress, Gatsby Js, React, Sass, Webpack
            </p>
            <p>
              <strong>Deliverables</strong>: Design, Development, UI, SEO
            </p>
          </aside>
        </Grid>
      </Splash>
    </Layout>
  )
}

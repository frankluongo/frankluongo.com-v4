import React from 'react'
import Img from "gatsby-image"

import { useTwwcImages } from "@lib"
import { Grid } from "@components/Common"
import Splash from "@components/Splash"
import Layout from "@global/Layout"
import Hero from "@components/Hero"

import MainContent from "@project/MainContent"

export default function TwinWavesWellness() {
  const { footer, hero, ui } = useTwwcImages();
  return (
    <Layout>
      <Hero
        image={hero}
        headline={<span className="bold">Twin Waves Wellness Center</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Twin Waves Wellness Center</h2>
            <p className="h3 italic">We welcome you as you are, and help get you to where you want to go.</p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
            The founders of Twin Waves Wellness reached out to me to create their branding and digital presence. The two co-founders recently started a new chiropractic practice in San Diego and needed to get their name out there in a big way.
            </p>
            <br />
            <h3 className="h3 black">The Design</h3>
            <p>The look and feel of the brand was a collaborative effort between myself and Courtney Mathis. We coordinated colors and typography, while she made the logomark.</p>
            <br />
            <Img fluid={hero} />
            <br />
            <Grid xsCols="2" data-align-center>
              <Img fluid={footer} />
              <p>The goal for Twin Waves was to make the visitors to their website feel like they’re at a beach. We want people to feel all the positive parts of being near the ocean, without getting sand everywhere.</p>
            </Grid>
            <br />
            <p>The end result is a site that feels calming yet bright and informative yet fun.</p>
            <br />
            <h3 className="h3 black">The Development</h3>
            <p>This site is built using Gatsby Js with WordPress serving as a headless CMS.</p>
            <br />
            <Grid xsCols="2" data-align-center>
              <p>
              There is an underlying CSS Design system, with the React Component using CSS Modules to tie styles to a specific scope.
              </p>
              <Img fluid={ui} />
            </Grid>
            <br />
            <p>The user-facing portion of the website is hosted on Vercel, while the WordPress site is at Digital Ocean. When users make changes, the Frontend is updated via Webhooks.</p>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p><strong>Title</strong>: Twin Waves Wellness Center</p>
            <p><strong>Client</strong>: Twin Waves Wellness</p>
            <p><strong>Tools</strong>: WordPress, Gatsby Js, React, Sass, Webpack</p>
            <p><strong>Deliverables</strong>: Design, Development, UI, SEO</p>
          </aside>
        </Grid>
      </Splash>
    </Layout>
  )
}



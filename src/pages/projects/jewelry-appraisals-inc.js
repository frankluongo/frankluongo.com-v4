import React from 'react'
import Img from "gatsby-image"

import { useJaiImages } from "@lib"
import { Grid } from "@components/Common"
import Splash from "@components/Splash"
import Layout from "@global/Layout"
import Hero from "@components/Hero"

import MainContent from "@project/MainContent"

export default function JewelryAppraisalsInc() {
  const { home, services, ui } = useJaiImages();
  return (
    <Layout>
      <Hero
        image={home}
        headline={<span className="bold">Jewelry Appraisals, Inc.</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Jewelry Appraisals, Inc.</h2>
            <p className="h3 italic">Melanie Krummel has been providing independent jewelry appraisals since 1996. The office is located in Havre de Grace, Maryland with convenient on-site services with reputable retail partners throughout Maryland, Washington DC, Delaware and Virginia.</p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
            The Jewelry Appraisals, Inc. website was in desperate need of a refresh. The site had not been updated since its original creation in the early 2000’s. The client brought me in to modernize their digital experience.
            </p>
            <br />
            <Img fluid={home} />
            <br />
            <h3 className="h3 black">The Solution</h3>
            <Grid xsCols="2" data-align-center>
              <p>In an effort to move quickly, the new website was built in HTML, CSS and JavaScript. However, as the client’s needs progressed, it made more sense to move the platform over to WordPress.</p>
              <Img fluid={services} />
            </Grid>
            <br />
            <Grid xsCols="2" data-align-center>
              <Img fluid={ui} />
              <p>
              Now, the site is built on a custom WordPress theme, allowing the team at Jewelry Appraisals, Inc. to edit content themselves without the need for assistance.
              </p>
            </Grid>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p><strong>Title</strong>: Jewelry Appraisals, Inc. Website</p>
            <p><strong>Client</strong>: Jewelry Appraisals, Inc.</p>
            <p><strong>Tools</strong>: HTML, CSS, JavaScript</p>
            <p><strong>Deliverables</strong>: Design, Development, UI, SEO</p>
          </aside>
        </Grid>
      </Splash>
    </Layout>
  )
}



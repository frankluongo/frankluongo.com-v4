import React from 'react'
import Img from "gatsby-image"

import { useAmjImages } from "@lib"
import { Grid } from "@components/Common"
import Splash from "@components/Splash"
import Layout from "@global/Layout"
import Hero from "@components/Hero"

import MainContent from "@project/MainContent"

export default function BrotherlyLoveRealEstate() {
  const { about, filters, hero } = useAmjImages();
  return (
    <Layout>
      <Hero
        image={hero}
        headline={<span className="bold">Angela Monaco Jewelry</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Angela Monaco Jewelry</h2>
            <p className="h3 italic">Angela Monaco is a Philadelphia-based jewelry designer, metalsmith, and entrepreneur. </p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
            I’ve been working with Angela and her team on an ongoing basis since 2018 to continually improve and enhance the look and feel of the Shopify website for Angela Monaco Jewelry and Ritual Shoppe.
            </p>
            <br />
            <h3 className="h3 black">The Solution</h3>
            <p>For Angela Monaco Jewelry, I built a completely custom Shopify Theme that powers the website.</p>
            <br />
            <Img fluid={filters} />
            <br />
            <Grid xsCols="2" data-align-center>
              <Img fluid={about} />
              <p>I’ve implemented custom features like Lookbooks, Enhanced Product Filtering/Sorting, and Email Signup Integrations to make the website fit Angela’s specific needs.</p>
            </Grid>
            <br />
            <Grid xsCols="2" data-align-center>
              <p>
              The site is built using Shopify’s Slate and Themekit Platforms.
              </p>
              <Img fluid={hero} />
            </Grid>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p><strong>Title</strong>: Angela Monaco Jewelry</p>
            <p><strong>Client</strong>: Angela Monaco</p>
            <p><strong>Tools</strong>: Shopify, Webpack, ES6, Sass</p>
            <p><strong>Deliverables</strong>: Development, UI, SEO</p>
          </aside>
        </Grid>
      </Splash>
    </Layout>
  )
}



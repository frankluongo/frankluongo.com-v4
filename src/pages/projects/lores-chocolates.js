import React from "react"

import Seo from "#global/Seo"
import { useLoresImages } from "#lib"
import { Grid } from "#components/Common"
import Splash from "#components/Splash"
import Hero from "#components/Hero"

import MainContent from "#project/MainContent"

export default function BrotherlyLoveRealEstate() {
  const { home } = useLoresImages()
  return (
    <>
      <Seo title="Lore’s Chocolates" />
      <Hero
        image={home}
        headline={<span className="bold">Lore’s Chocolates</span>}
        showAvailability={false}
      />
      <Splash style={{ background: "var(--gradient-gray)" }} fullWidth={true}>
        <Grid mdCols="4/2">
          <MainContent>
            <h2 className="h2 black">Lore’s Chocolates</h2>
            <p className="h3 italic">
              Lore’s signature confections are made by hand in small batches and
              sold at our historic location just one block from the famed
              Liberty Bell in the heart of Old City Philadelphia
            </p>
            <br />
            <h3 className="h3 black">The Problem</h3>
            <p>
              Initially, The team at Lore’s Chocolates needed some technical
              help with their WordPress/WooCommerce website to add warm weather
              shipping fees to orders. However, after the impacts of COVID-19,
              we decided it was in their best interest to switch over to Shopify
              for managing their in-store point of sale, as well as online
              store.
            </p>
            <br />
            <h3 className="h3 black">The Solution</h3>
            <p>
              The first feature I added for them was a WordPress plugin that
              checks the weather in a customer’s area to determine whether or
              not they’ll need a warm weather fee.
            </p>
            <br />
            <p>
              Since their needs have grown, I’ve built them a completely custom
              Shopify Website..
            </p>
            <br />
            <p>
              The WordPress and Shopify sites use Webpack to compile CSS and
              JavaScript for usage on the site.
            </p>
          </MainContent>
          <aside>
            <h3 className="h3 black">Details</h3>
            <p>
              <strong className="bold">Title</strong>: Lore’s Chocolates
            </p>
            <p>
              <strong className="bold">Client</strong>: Lore’s Chocolates
            </p>
            <p>
              <strong className="bold">Tools</strong>: WordPress, Shopify,
              Webpack, ES6, Sass
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

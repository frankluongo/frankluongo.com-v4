import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Button, Wrapper, Container, Grid } from "@components/Common"
import { emailAddress } from "@constants"

import styles from "./AboutMePreview.module.css"

export default function AboutMePreview() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aboutme-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const fluid = data?.file?.childImageSharp?.fluid

  return (
    <Wrapper>
      <Container>
        <Grid mdCols="2">
          <div>
            <div className={styles.AboutMeCol1Content}>
              <h2 className="h2 secondary-font bold uppercase">
                A little about me
              </h2>
              <p>
                I first started slinging code in 2012, and haven’t stopped
                since. Currently, I’m a one-man one-stop-shop for your design,
                user experience, and web development needs located in the always
                sunny Philadelphia. Whether you need a blog, eCommerce store,
                personal website, or something more (or less), chances are I can
                lend a hand. Below are some of the services I provide:
              </p>
              <br />
              <br />
              <h3 className="h4 primary-font bold uppercase">
                Those sweet, sweet buzzwords:
              </h3>
              <ul className="list">
                <li>WordPress Themes & Plugins</li>
                <li>Shopify Themes, Apps and Stores</li>
                <li>Static Sites with HTML, CSS, and Vanilla JavaScript</li>
                <li>Modern Web Apps with React Js and MongoDB</li>
                <li>Modern JAMStack Websites</li>
                <li>Electron Desktop Apps</li>
              </ul>
              <Button
                Tag="a"
                href={`mailto:${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                data-theme="dark"
              >
                Get In Touch With Me
              </Button>
            </div>
          </div>
          <div>
            <Img fluid={fluid} />
          </div>
        </Grid>
      </Container>
    </Wrapper>
  )
}

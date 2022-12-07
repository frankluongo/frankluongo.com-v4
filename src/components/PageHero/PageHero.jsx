import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Box } from "../Box/Box"

import { emailAddress } from "#utils/constants"

import { Availability } from "#components/Availability/Availability"

import * as css from "./PageHero.module.css"
import { Link } from "gatsby"

export const PageHero = ({
  caption,
  children,
  image,
  imageAlt,
  offset,
  showAvailability,
  showButton,
}) => {
  const src = getImage(image)
  return (
    <section
      className={`${css.Hero} pos:rel flex fd:column justify-center has-overlay`}
    >
      <div className="container grid pos:rel z2">
        {children}
        {offset && <div className="gc:1 mx900:display:none" />}
        {showAvailability && (
          <div className="gc:4 mn900:gc:5">
            <Availability textColor="white" />
          </div>
        )}
        {offset && <div className="gc:1 mx900:display:none" />}
        {showButton && (
          <div className="gc:4 mn900:gc:5">
            <Link
              className="button button:teal button:default display:inline-block"
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </Link>
          </div>
        )}
      </div>
      <figure>
        <GatsbyImage className="pos:abs inset:0" image={src} alt={imageAlt} />
        {caption && (
          <Box
            Tag="figcaption"
            extraClasses="pos:abs offset-right fs:12"
            size="0.25"
          >
            {caption}
          </Box>
        )}
      </figure>
    </section>
  )
}

PageHero.defaultProps = {
  caption: "Photo taken by some cute kittens",
  children: <div />,
  showAvailability: false,
  showButton: false,
  image: "https://placekitten.com/1920/1080",
  imageAlt: "Bill Murray",
}

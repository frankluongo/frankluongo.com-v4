import React from "react"
import BackgroundImage from "gatsby-background-image"

import { Availability } from "#components/Availability/Availability"

import * as styles from "./Hero.module.css"
import { Button } from "../Common/Button/Button"

export default function Hero({
  headline,
  strapline,
  button,
  image,
  showAvailability,
}) {
  return (
    <div className={styles.HeroWrapper}>
      <div>
        <BackgroundImage className={styles.Hero} Tag={`section`} fluid={image}>
          <div className={styles.HeroInner}>
            <section className={`container ${styles.HeroContainer}`}>
              <div className={styles.Content}>
                <h1>{headline}</h1>
                {strapline && <p className={styles.Strapline}>{strapline}</p>}
                {showAvailability && (
                  <Availability modifiers={styles.Availability} />
                )}
                {button && <Button {...button.props}>{button.text}</Button>}
              </div>
            </section>
          </div>
        </BackgroundImage>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  headline: (
    <>
      <span className="bold">Oh, Hello!</span> I'm Frank Luongo.
    </>
  ),
  showAvailability: true,
  button: null,
  image: "http://www.fillmurray.com/1920/1080",
}

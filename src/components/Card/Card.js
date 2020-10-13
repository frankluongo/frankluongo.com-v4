import React from "react"
import BackgroundImage from "gatsby-background-image"

import styles from "./Card.module.css"

import { IconChevronRight } from "@components/Icons"

export default function Card({ url, heading, title, thumbnail, feature }) {
  return (
    <div className={styles.CardWrapper}>
      <a className={styles.Card} href={url}>
        <header className={styles.Header} data-flex>
          <BackgroundImage className={styles.Logo} Tag="div" fluid={thumbnail}  />
          <span className="h6">{heading}</span>
        </header>
        <BackgroundImage className={styles.Thumbnail} Tag="figure" fluid={feature} />
        <section className="h5">{title}</section>
        <IconChevronRight className={styles.Icon} />
      </a>
    </div>
  )
}

Card.defaultProps = {
  url: "/",
  heading: "this is the heading",
  title: "this is the card title",
  categories: "Thing 1 | Thing 2",
}

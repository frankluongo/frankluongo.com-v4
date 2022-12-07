import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { IconChevronRight } from "#components/Icons"
import * as styles from "./Card.module.css"

export default function Card({
  extraClasses,
  url,
  heading,
  title,
  thumbnail,
  feature,
}) {
  const thumbnailImg = getImage(thumbnail)
  const featImg = getImage(feature)
  return (
    <div className={`${styles.CardWrapper} ${extraClasses} bg:white`}>
      <a
        className={`pos:rel flex fd:column gap:0.5 mn900:gap:1 padding:0.5 mn700:p:1 text-decoration:none color:black`}
        href={url}
      >
        <header className="mx700:display:none mn700:flex align:center">
          <GatsbyImage
            className={styles.Logo}
            image={thumbnailImg}
            alt={title}
          />
          <span className="fs:12">{heading}</span>
        </header>
        <GatsbyImage
          className={`${styles.Thumbnail} bg:gray1`}
          alt={title}
          image={featImg}
        />
        <div className="flex gap:0.5 align:center mx700:fwrap">
          <section className="fs:12 mn900:fs:14">{title}</section>
          <IconChevronRight className={styles.Icon} />
        </div>
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

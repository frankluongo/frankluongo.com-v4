import React from "react"
import Img from "gatsby-image"

import { useInstagram, useHeadshot } from "@lib"
import { instagramUrl } from "@constants"

import styles from "./Instagram.module.css"

export default function Instagram() {
  const photos = useInstagram()
  const headshot = useHeadshot()
  if (!photos) return null
  return (
    <section className={styles.Instagram}>
      <header className={styles.Header}>
        <figure className={styles.PhotoWrapper}>
          <Img fluid={headshot} />
        </figure>
        <h3 className="h4 black uppercase">My Latest Grams</h3>
      </header>
      <ul className={styles.Feed} data-grid>
        {photos.map(({ node }) => {
          return (
            <li className={styles.Item} key={node.id}>
              <a
                className={styles.InstaPhoto}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${node.thumbnail_src})` }}
                aria-label="Check me out on Instagram"
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

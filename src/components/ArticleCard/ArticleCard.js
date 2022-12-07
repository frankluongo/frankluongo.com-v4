import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./ArticleCard.module.css"

export default function ArticleCard({ post }) {
  const { date, excerpt, imagePath, slug, tags, title } = post.frontmatter
  const img = getImage(imagePath)
  const tagsArray = tags.replace(/\s/g, "").split(",")
  return (
    <Link className={styles.ArticleCard} to={`/blog/${slug}`}>
      <header className={styles.Header} data-flex>
        <GatsbyImage className={styles.Thumbnail} image={img} alt={title} />
        <div className={styles.Headline}>
          <div className={`${styles.Dateline} h6`}>{date}</div>
          <h3 className={`${styles.Title} h5 black`}>{title}</h3>
        </div>
      </header>
      <p className="h6">{excerpt}</p>
      <ul className={`${styles.Tags} small`} data-flex>
        <span className="uppercase black">Tags:</span>
        {tagsArray.map(tag => (
          <li className={styles.Tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}

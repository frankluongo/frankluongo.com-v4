import React from "react"

import * as styles from "./Tile.module.css"

export default function Tile({ content }) {
  const { Icon, tileTitle, url } = content
  return (
    <a
      className={styles.Tile}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.Icon} />
      <div className={`${styles.Title} h6 uppercase black`}>{tileTitle}</div>
    </a>
  )
}

import React from "react"

import styles from "./Heading.module.css"

export function Heading({ children }) {
  return <h2 className={styles.Heading}>{children}</h2>
}

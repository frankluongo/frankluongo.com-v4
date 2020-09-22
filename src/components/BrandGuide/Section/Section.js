import React from "react"

import styles from "./Section.module.css"

export function Section({ children }) {
  return <section className={styles.Section}>{children}</section>
}

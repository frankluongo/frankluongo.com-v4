import React from "react"

import styles from "./Grid.module.css"

export function Grid({ cols, children }) {
  return (
    <section className={styles.Grid} data-cols={cols}>
      {children}
    </section>
  )
}

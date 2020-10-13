import React from "react"

import styles from "./Grid.module.css"

export function Grid({ xsCols, smCols, mdCols, lgCols, children, ...props }) {
  return (
    <section
      className={styles.Grid}
      data-cols-xs={xsCols}
      data-cols-sm={smCols}
      data-cols-md={mdCols}
      data-cols-lg={lgCols}
      data-grid
      {...props}
    >
      {children}
    </section>
  )
}

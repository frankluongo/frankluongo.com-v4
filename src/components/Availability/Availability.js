import React from "react"

import { status } from "@constants"

import styles from "./Availability.module.css"

export default function Availability({ modifiers }) {
  return (
    <div className={`${styles.Availability} ${modifiers}`}>
      <div
        className={styles.IconWrapper}
        style={{ backgroundColor: status.color }}
      >
        <status.Icon className={styles.Icon} style={{ fill: status.fill }} />
      </div>
      <div className={`${styles.Text} h5`}>{status.text}</div>
    </div>
  )
}

Availability.defaultProps = {
  modifiers: "",
}

import React from "react"

import { status } from "#utils/constants"

import * as styles from "./Availability.module.css"

export const Availability = ({ modifiers, textColor }) => {
  return (
    <div className={`${styles.Availability} ${modifiers} color:${textColor}`}>
      <div
        className={styles.IconWrapper}
        style={{ backgroundColor: status.color }}
      >
        <status.Icon className={styles.Icon} style={{ fill: status.fill }} />
      </div>
      <div className={`${styles.Text} fs:14`}>{status.text}</div>
    </div>
  )
}

Availability.defaultProps = {
  modifiers: "",
  textColor: "white",
}

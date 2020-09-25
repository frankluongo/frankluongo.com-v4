import React from "react"

import { location, businessName } from "@constants"

import styles from "./BusinessDetails.module.css"

export default function BusinessDetails() {
  return (
    <div className={styles.BusinessDetails}>
      <div className="bold h5">{businessName}</div>
      <div className="h5">{location}</div>
    </div>
  )
}

import React from "react"

import Logo from "@components/Logo"

import { location, businessName } from "@constants"

import styles from "./BusinessDetails.module.css"

export default function BusinessDetails() {
  return (
    <div className={styles.BusinessDetails}>
      <Logo />
      {businessName}
      {location}
    </div>
  )
}

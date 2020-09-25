import React from "react"

import { emailAddress, phoneNumber } from "@constants"

import styles from "./ContactInfo.module.css"

export default function ContactInfo() {
  return (
    <div className={styles.ContactInfo}>
      <a
        className={`${styles.Link} h5`}
        href={`mailto:${emailAddress}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {emailAddress}
      </a>
      <a
        className={`${styles.Link} h5`}
        href={`tel:+1${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {phoneNumber}
      </a>
    </div>
  )
}

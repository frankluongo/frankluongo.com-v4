import React from 'react'

import styles from "./MainContent.module.css"

export default function MainContent({ children }) {
  return (
    <article className={styles.MainContent}>
      {children}
    </article>
  )
}

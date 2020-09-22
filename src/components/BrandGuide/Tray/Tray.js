import React from "react"

import styles from "./Tray.module.css"

export function Tray({ children }) {
  return <section className={styles.Tray}>{children}</section>
}

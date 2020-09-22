import React from "react"

import styles from "./Container.module.css"

export function Container({ children, modifiers, ...props }) {
  return (
    <section className={`${styles.Container} ${modifiers}`} {...props}>
      {children}
    </section>
  )
}

Container.defaultProps = {
  modifiers: "",
}

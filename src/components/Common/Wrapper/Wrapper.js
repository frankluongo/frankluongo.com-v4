import React from "react"

import styles from "./Wrapper.module.css"

export function Wrapper({ children, modifiers, ...props }) {
  return (
    <section className={`${styles.Wrapper} ${modifiers}`} {...props}>
      {children}
    </section>
  )
}

Wrapper.defaultProps = {
  modifiers: "",
}

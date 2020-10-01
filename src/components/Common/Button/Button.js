import React from "react"

import styles from "./Button.module.css"

export function Button({ Tag, children, ...props }) {
  return (
    <Tag className={styles.Button} {...props}>
      {children}
    </Tag>
  )
}

Button.defaultProps = {
  Tag: "a",
}

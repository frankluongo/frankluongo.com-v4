import React from "react"

import styles from "./Checkbox.module.css"

export function Checkbox({ type, id, name, title, ...props }) {
  return (
    <div className={styles.Checkbox} data-flex>
      <input className={styles.Input} type={type} id={id} name={name} value={title} {...props} />
      <label className={`${styles.Label} h6`} htmlFor={id}>
        {title}
      </label>
    </div>
  )
}

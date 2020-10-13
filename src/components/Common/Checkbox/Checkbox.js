import React from "react"

import styles from "./Checkbox.module.css"

export function Checkbox({ type, id, name, title }) {
  return (
    <div className={styles.Checkbox} data-flex>
      <input className={styles.Input} type={type} id={id} name={name} />
      <label className={`${styles.Label} h6`} htmlFor={id}>
        {title}
      </label>
    </div>
  )
}

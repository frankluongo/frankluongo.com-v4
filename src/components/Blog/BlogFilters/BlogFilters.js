import React from "react"

import { CheckBoxGroup } from "@components/Common"
import { tags } from "@constants"

import styles from "./BlogFilters.module.css"

export default function BlogFilters() {
  return (
    <section className={styles.Filters}>
      <h2 className="h4 black">Filters</h2>
      <CheckBoxGroup title="Tags" options={tags} />
    </section>
  )
}

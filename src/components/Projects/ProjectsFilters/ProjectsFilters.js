import React from "react"

import { CheckBoxGroup } from "@components/Common"
import { types, tech, work } from "@constants"

import styles from "./ProjectsFilters.module.css"

export default function ProjectsFilters() {
  return (
    <section className={styles.Filters}>
      <h2 className="h4 black">Filters</h2>
      <CheckBoxGroup title="Type" options={types} />
      <CheckBoxGroup title="Tech" options={tech} />
      <CheckBoxGroup title="Included" options={work} />
    </section>
  )
}

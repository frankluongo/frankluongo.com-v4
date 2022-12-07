import React from "react"

import { CheckBoxGroup } from "#components/Common"
import { types, tech, work } from "#utils/constants"
import { useFiltersContext } from "#context/ContextFilters"
import { useCheck } from "#hooks"

import * as styles from "./ProjectsFilters.module.css"

export default function ProjectsFilters() {
  const { activeFilters, setActiveFilters } = useFiltersContext()
  const onCheck = useCheck(activeFilters, setActiveFilters)
  return (
    <section className={styles.Filters}>
      <h2 className="h4 black">Filters</h2>
      <CheckBoxGroup title="Type" options={types} callback={onCheck} />
      <CheckBoxGroup title="Tech" options={tech} callback={onCheck} />
      <CheckBoxGroup title="Included" options={work} callback={onCheck} />
    </section>
  )
}

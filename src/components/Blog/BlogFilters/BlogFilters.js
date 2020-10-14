import React from "react"

import { CheckBoxGroup } from "@components/Common"
import { tags } from "@constants"
import { useFiltersContext } from "@context"
import { useCheck } from "@hooks";

import styles from "./BlogFilters.module.css"

export default function BlogFilters() {
  const { activeFilters, setActiveFilters } = useFiltersContext();
  const onCheck = useCheck(activeFilters, setActiveFilters)

  return (
    <section className={styles.Filters}>
      <h2 className="h4 black">Filters</h2>
      <CheckBoxGroup title="Tags" options={tags} callback={onCheck} />
    </section>
  )
}

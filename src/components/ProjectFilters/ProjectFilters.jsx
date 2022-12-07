import React from "react"

import { CheckBoxGroup } from "#components/CheckboxGroup/CheckboxGroup"
import { types, tech, work } from "#utils/constants"
import { useFiltersContext } from "#context/ContextFilters"
import { useCheck } from "#hooks"

export const ProjectFilters = () => {
  const { activeFilters, setActiveFilters } = useFiltersContext()
  const onCheck = useCheck(activeFilters, setActiveFilters)
  return (
    <>
      <h2 className="fs:24">Filters</h2>
      <CheckBoxGroup title="Type" options={types} callback={onCheck} />
      <CheckBoxGroup title="Tech" options={tech} callback={onCheck} />
      <CheckBoxGroup title="Included" options={work} callback={onCheck} />
    </>
  )
}

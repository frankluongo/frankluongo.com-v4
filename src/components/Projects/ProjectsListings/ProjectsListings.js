import React from "react"

import Card from "#components/Card"
import { useProjects } from "#lib"

import { Grid } from "#components/Common"
import { useFiltersContext } from "#context/ContextFilters"
import { useFilter } from "#hooks"

export default function ProjectsListings() {
  const { activeFilters } = useFiltersContext()
  const projects = useProjects()
  const projectsList = useFilter({
    activeFilters,
    itemsList: projects,
    value: "tags",
  })

  return (
    <Grid xsCols="1" smCols="2" mdCols="3">
      {projectsList.map(project => (
        <Card {...project} key={project.id} />
      ))}
    </Grid>
  )
}

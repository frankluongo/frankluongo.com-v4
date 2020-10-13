import React from "react"

import Card from "@components/Card"
import { useProjects } from "@lib"

import { Grid } from "@components/Common"

export default function ProjectsListings() {
  const projects = useProjects();
  return (
    <Grid xsCols="1" smCols="2" mdCols="3">
      {projects.map(project => <Card {...project} key={project.id} />)}
    </Grid>
  )
}

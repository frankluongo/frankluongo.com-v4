import React from "react"

import Splash from "#components/Splash"

import { Grid } from "#components/Common"
import ProjectsListings from "../ProjectsListings"
import ProjectsFilters from "../ProjectsFilters"

export default function ProjectSplash() {
  return (
    <Splash style={{ backgroundColor: "var(--gray-1)" }}>
      <Grid mdCols="3/1">
        <div>
          <ProjectsListings />
        </div>
        <div>
          <ProjectsFilters />
        </div>
      </Grid>
    </Splash>
  )
}

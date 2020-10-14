import React from "react"

import Layout from "@global/Layout"
import ProjectsHero from "@projects/ProjectsHero"
import ProjectsSplash from "@projects/ProjectsSplash"
import { FiltersProvider } from "@context"

const ProjectsIndex = () => {
  return (
    <FiltersProvider>
      <Layout>
        <ProjectsHero />
        <ProjectsSplash />
      </Layout>
    </FiltersProvider>
  )
}

export default ProjectsIndex

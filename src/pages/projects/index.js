import React from "react"

import Seo from "@global/Seo"
import Layout from "@global/Layout"
import ProjectsHero from "@projects/ProjectsHero"
import ProjectsSplash from "@projects/ProjectsSplash"
import { FiltersProvider } from "@context"

const ProjectsIndex = () => {
  return (
    <>
      <Seo title="Projects" />
      <FiltersProvider>
        <Layout>
          <ProjectsHero />
          <ProjectsSplash />
        </Layout>
      </FiltersProvider>
    </>
  )
}

export default ProjectsIndex

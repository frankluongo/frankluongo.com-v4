import React from "react"
import { getImage } from "gatsby-plugin-image"

import Seo from "#global/Seo"
import { useProjectsImage } from "#lib"

import { PageHero } from "#components/PageHero/PageHero"
import { FiltersProvider } from "#context/ContextFilters"
import { ProjectFilters } from "#components/ProjectFilters/ProjectFilters"

const ProjectsIndex = () => {
  const image = useProjectsImage()
  const heroImg = getImage(image)
  return (
    <FiltersProvider>
      <Seo title="Projects" />
      <PageHero
        showAvailability={true}
        showButton={true}
        offset={false}
        image={heroImg}
      >
        <div className="gc:4 mn900:gc:5 color:white flex fd:column gap:1">
          <h2 className="fs:32 mn900:fs:64">
            I'm a <strong>business</strong>, man
          </h2>
          <p className="fs:14 mn900:fs:24 pgmw line-height:1.6">
            I've said it before and I'll say it again, My life is dope and I do
            dope things. Check them out below
          </p>
        </div>
      </PageHero>
      <section className="container grid">
        <section></section>
        <aside className="padding:1">
          <ProjectFilters />
        </aside>
      </section>
    </FiltersProvider>
  )
}

export default ProjectsIndex

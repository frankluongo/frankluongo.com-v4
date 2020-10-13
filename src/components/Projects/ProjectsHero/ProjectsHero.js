import React from "react"

import Hero from "@components/Hero"

import { useProjectsImage } from "@lib"

export default function ProjectsHero() {
  const image = useProjectsImage()

  return (
    <Hero
      image={image}
      headline={
        <>
          I'm a <span className="bold">business</span>, man
        </>
      }
      strapline="I’ve said it before and I’ll say it again, My life is dope and I do dope things. Check them out below:"
    />
  )
}

import React, { useState } from "react"

import Hero from "#components/Hero"

import { useInterval } from "#hooks"
import { useBlogImage } from "#lib"

export default function BlogHero() {
  const [c, setC] = useState(["i", "o"])
  const image = useBlogImage()

  useInterval(() => {
    const copy = [...c]
    copy.reverse()
    setC(copy)
  }, 1000)

  return (
    <Hero
      image={image}
      headline={
        <>
          The Obl{c[0]}gatory <span className="bold">Bl{c[1]}g</span>
        </>
      }
      strapline="Sometimes I write things down, and occasionally I even post those things here"
      showAvailability={false}
    />
  )
}

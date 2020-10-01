import React from "react"

import Hero from "@components/Hero"

import { emailAddress } from "@constants"
import { useContactImage } from "@lib"

export default function ContactHero() {
  const image = useContactImage()
  return (
    <Hero
      image={image}
      button={{
        text: emailAddress,
        props: {
          href: `mailto:${emailAddress}`,
        },
      }}
      headline={
        <>
          <span class="bold">Hey,</span> what's up? Hello!
        </>
      }
      strapline="Want to get to know me a little better and get started on your project? Well, then, let’s just jump into it!"
    />
  )
}

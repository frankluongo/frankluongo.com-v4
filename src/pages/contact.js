import React from "react"
import { getImage } from "gatsby-plugin-image"

import Seo from "#global/Seo"
import ContactSplash from "#contact/ContactSplash"
import { PageHero } from "#components/PageHero/PageHero"

import { useContactImage } from "#lib"

const ContactPage = () => {
  const image = useContactImage()
  const heroImg = getImage(image)
  return (
    <>
      <Seo title="Get In Touch" />
      <PageHero
        showAvailability={true}
        showButton={true}
        offset={true}
        image={heroImg}
      >
        <div className="gc:1 mx900:display:none" />
        <div className="gc:4 mn900:gc:5 color:white flex fd:column gap:1">
          <h2 className="fs:32 mn900:fs:64">
            <strong className="bold">Hey</strong>, what's up? Hello
          </h2>
          <p className="fs:14 mn900:fs:24 pgmw">
            Want to get to know me a little better and get started on your
            project? Well, then, let's just jump into it!
          </p>
        </div>
      </PageHero>
      <ContactSplash />
      <section className="container grid">
        <h2 className="fs:16">Get To Know Me</h2>
      </section>
    </>
  )
}

export default ContactPage

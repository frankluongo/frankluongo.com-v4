import React from "react"

import Seo from "@global/Seo"
import Layout from "@global/Layout"
import ContactHero from "@contact/ContactHero"
import ContactSplash from "@contact/ContactSplash"

const ContactPage = () => {
  return (
    <>
      <Seo title="Get In Touch" />
      <Layout>
        <ContactHero />
        <ContactSplash />
      </Layout>
    </>
  )
}

export default ContactPage

import React from "react"

import Layout from "@global/Layout"
import ContactHero from "@contact/ContactHero"
import ContactSplash from "@contact/ContactSplash"

const IndexPage = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactSplash />
    </Layout>
  )
}

export default IndexPage

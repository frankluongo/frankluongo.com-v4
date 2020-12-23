import React from "react"

import Seo from "@global/Seo"
import Layout from "@global/Layout"
import { Container } from "@components/Common"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage

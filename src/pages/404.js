import React from "react"

import Seo from "#global/Seo"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <section
      className="container"
      style={{ paddingTop: "12rem", paddingBottom: "8rem" }}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </>
)

export default NotFoundPage

import React from "react"
import { Helmet } from "react-helmet"
import { useMeta } from "#lib"

export default function Seo({ children, location, description, title, image }) {
  const meta = useMeta()
  return (
    <Helmet titleTemplate={`%s | ${meta.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={meta.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={meta.title} key="ogsitename" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      {/* More Things */}
      {children}
    </Helmet>
  )
}

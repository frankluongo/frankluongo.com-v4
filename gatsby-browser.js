import React from "react"
import { Layout } from "#components/Layout/Layout"

import "./src/styles/app.css"

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

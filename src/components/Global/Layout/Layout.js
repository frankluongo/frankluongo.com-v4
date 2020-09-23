import React from "react"

import Header from "@global/Header"

import "./Styles/Reset.css"
import "./Styles/Variables.css"
import "./Styles/Layout.css"
import "./Styles/Typography.css"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

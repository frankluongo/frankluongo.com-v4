import React from "react"

import Footer from "@global/Footer"
import Header from "@global/Header"

import "./Styles/Reset.css"
import "./Styles/Variables.css"
import "./Styles/Layout.css"
import "./Styles/Typography.css"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <hr />
      </main>
      <Footer />
    </>
  )
}

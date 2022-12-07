import React, { useEffect } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }) => {
  useEffect(() => {
    const onTouch = () => setTouch(true)
    function setTouch(bool) {
      document.documentElement.setAttribute("data-is-touch", bool)
    }

    setTouch(false)
    document.addEventListener("touchend", onTouch, { once: true })
    return () => document.removeEventListener("touchend", onTouch)
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

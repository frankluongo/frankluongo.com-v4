import React from "react"

import { Logo } from "#components/Logo/Logo"
import { DesktopNav } from "../DesktopNav/DesktopNav"
import { MobileNav } from "../MobileNav/MobileNav"

export const Header = () => {
  return (
    <header className="pos:fix bg:black:50 z3 w:100 padding-block:1 pinline:1">
      <section className="container flex pos:rel z2 gap:1 align:center">
        <Logo className="fill:white" />
        <DesktopNav />
        <MobileNav />
      </section>
      <div className="border bg:gray1:10 pos:abs mw:container w:100:padded center:horizontal bottom:0 z1" />
    </header>
  )
}

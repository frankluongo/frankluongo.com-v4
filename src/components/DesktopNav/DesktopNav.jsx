import React from "react"
import { Link } from "gatsby"

import { navLinks } from "#utils/constants"

export const DesktopNav = () => {
  return (
    <div className="mx700:display:none">
      <nav className="flex gap:1 mn900:gap:1.5 align:center">
        {navLinks.map(link => (
          <Link
            className="color:white uppercase bold fs:14 text-decoration:none"
            to={link.url}
            key={link.url}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

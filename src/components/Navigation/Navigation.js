import React from "react"
import { Link } from "gatsby"

import { navLinks } from "@constants"

export default function Navigation({
  navClass,
  ulClass,
  liClass,
  linkClass,
  ...props
}) {
  return (
    <nav className={navClass} aria-label="Website Navigation" {...props}>
      <ul className={ulClass}>
        {navLinks.map(link => (
          <li className={liClass} key={link.url}>
            <Link className={linkClass} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.defaultProps = {
  navClass: "",
  ulClass: "",
  liClass: "",
  linkClass: "",
}

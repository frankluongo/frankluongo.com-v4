import React from "react"

import { socialLinks } from "#utils/constants"

export default function SocialIcons({
  ulClass,
  liClass,
  linkClass,
  iconClass,
}) {
  return (
    <ul className={ulClass}>
      {socialLinks.map((link, i) => {
        const { Icon } = link
        return (
          <li className={liClass} key={i}>
            <a
              className={linkClass}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
            >
              <Icon className={iconClass} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

SocialIcons.defaultProps = {
  ulClass: "",
  liClass: "",
  linkClass: "",
  iconClass: "",
}

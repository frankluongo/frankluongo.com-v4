import React from "react"
import { Link } from "gatsby"

import { Availability } from "#components/Availability/Availability"
import { Logo } from "#components/Logo/Logo"

import {
  location,
  businessName,
  emailAddress,
  phoneNumber,
  navLinks,
} from "#utils/constants"
import SocialIcons from "../SocialIcons/SocialIcons"

export const Footer = () => {
  return (
    <footer className="bg:black color:white margin-top:3">
      <section className="container grid padding-block:3 align:center">
        <div className="gc:4 mn700:gc:2 block-gap:0.5">
          <Logo className="fill:white" />
          <div className="bold fs:14">{businessName}</div>
          <div className="fs:14">{location}</div>
        </div>
        <div className="gc:4 mn700:gc:2 block-gap:0.5">
          <a
            className={`display:block color:white fs:14`}
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {emailAddress}
          </a>
          <a
            className={`display:block color:white fs:14`}
            href={`tel:+1${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {phoneNumber}
          </a>
        </div>
        <div className="gc:4 mn700:gc:2">
          <Availability />
        </div>
        <div className="gc:4 mn900:gc:6 block-gap:1">
          <h3 className="fs:14 xbold uppercase">Sitemap</h3>
          <nav className="flex gap:1">
            {navLinks.map(link => (
              <Link
                className="color:white fs:14 text-decoration:none"
                to={link.url}
                key={link.url}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="gc:4 mn900:gc:6 block-gap:1">
          <h3 className="fs:14 xbold uppercase">Connect</h3>
          <SocialIcons ulClass="flex gap:1" iconClass="fill:white height:1" />
        </div>
      </section>
      <div className="bg:gray-5 padding:0.5 fs:12 text-align:center">
        &copy; {new Date().getFullYear()} FLDC, LLC
      </div>
    </footer>
  )
}

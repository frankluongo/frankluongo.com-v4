import React, { useState } from "react"
import { Link } from "gatsby"

import { Logo } from "#components/Logo/Logo"

import { navLinks } from "#utils/constants"
import { socialLinks } from "#utils/constants"

export const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const activeClass = open ? "opacity:1" : "opacity:0 translate:x:100"
  return (
    <div className="mn700:display:none mleft:auto">
      <button
        className="button button:naked color:white uppercase flex align:center gap:0.5"
        onClick={() => setOpen(!open)}
      >
        Menu
        <svg
          width="31"
          height="24"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4501 20C13.4201 21.8598 16.0769 23 19 23C25.0751 23 30 18.0751 30 12C30 5.92487 25.0751 1 19 1C16.0769 1 13.4201 2.14015 11.4501 4H10.0556C12.2529 1.545 15.446 0 19 0C25.6274 0 31 5.37258 31 12C31 18.6274 25.6274 24 19 24C15.446 24 12.2529 22.455 10.0556 20H11.4501Z"
            fill="white"
          />
          <rect y="7" width="24" height="2" rx="1" fill="white" />
          <rect y="11" width="20" height="2" rx="1" fill="white" />
          <rect y="15" width="16" height="2" rx="1" fill="white" />
        </svg>
      </button>
      <nav
        className={`pos:fix transition:transform+opacity inset:0 z5 bg:dark-gradient mn700:display:none ${activeClass}`}
      >
        <header className="pos:rel bg:black:50 padding:1">
          <section className="container pos:rel flex gap:1 z1">
            <Logo className="fill:white" />
            <button
              onClick={() => setOpen(!open)}
              className="button button:naked color:white flex gap:0.5 align:center uppercase mleft:auto"
            >
              Close
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.45009 20C10.4201 21.8598 13.0769 23 16 23C22.0751 23 27 18.0751 27 12C27 5.92487 22.0751 1 16 1C13.0769 1 10.4201 2.14015 8.45009 4H7.05554C9.25282 1.545 12.446 0 16 0C22.6274 0 28 5.37258 28 12C28 18.6274 22.6274 24 16 24C12.446 24 9.25282 22.455 7.05554 20H8.45009Z"
                  fill="white"
                />
                <rect
                  x="2.05023"
                  y="5.63602"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 2.05023 5.63602)"
                  fill="white"
                />
                <rect
                  x="0.635925"
                  y="16.9498"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 0.635925 16.9498)"
                  fill="white"
                />
              </svg>
            </button>
          </section>
          <div className="border bg:gray1:10 pos:abs mw:container w:100:padded center:horizontal bottom:0 z1" />
        </header>
        <section className="padding-block:1.5 pinline:1 flex fd:column gap:1.5">
          {navLinks.map(link => (
            <Link
              className="color:white uppercase bold fs:32 text-decoration:none"
              to={link.url}
              key={link.url}
            >
              {link.title}
            </Link>
          ))}
          <ul
            className="flex flex-wrap:wrap pos:abs gap:1"
            style={{
              bottom: "1.5rem",
              right: "1rem",
              width: "173px",
              transform: "rotate(180deg)",
            }}
          >
            {socialLinks.map((link, i) => {
              const { Icon } = link
              return (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                  >
                    <Icon
                      className="h:2 fill:white"
                      style={{ transform: "rotate(-180deg)" }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </nav>
    </div>
  )
}

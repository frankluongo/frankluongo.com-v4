import React, { useState } from "react"
import { Link } from "gatsby"

import { Container } from "@components/Common"
import { IconClose, IconBars } from "@components/Icons"
import Logo from "@components/Logo"

import styles from "./Header.module.css"
import Navigation from "@components/Navigation"
import SocialIcons from "@components/SocialIcons"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.Header} aria-label="Website Header">
      <Container modifiers={styles.Content}>
        <Link className={styles.HeaderLogo} to="/">
          <Logo className={styles.HeaderLogoDesktop} />
        </Link>
        <div className={styles.NavWrapper} data-open={open}>
          <button
            className={styles.CloseButton}
            onClick={onClose}
            aria-label="Close Navigation"
          >
            <IconClose className={styles.CloseIcon} />
          </button>
          <Link className={styles.HeaderLogoMobile} to="/">
            <Logo className={styles.HeaderLogoMobileIcon} />
          </Link>
          <Navigation
            navClass={styles.HeaderNav}
            ulClass={styles.HeaderNavUl}
            liClass={styles.HeaderNavLi}
            linkClass={`${styles.HeaderNavLink} h5 black uppercase`}
          />
          <div className={styles.HeaderSocial}>
            <SocialIcons
              ulClass={styles.HeaderSocialUl}
              liClass={styles.HeaderSocialLi}
              linkClass={styles.HeaderSocialLink}
              iconClass={styles.HeaderSocialIcon}
            />
          </div>
        </div>
        <div className={styles.OpenButtonWrapper}>
          <button
            className={styles.OpenButton}
            aria-label="Show Website Navigation"
            onClick={onOpen}
          >
            <IconBars className={styles.OpenIcon} />
          </button>
        </div>
      </Container>
    </header>
  )

  function onClose() {
    setOpen(false)
  }

  function onOpen() {
    setOpen(true)
  }
}

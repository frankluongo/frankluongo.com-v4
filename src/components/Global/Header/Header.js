import React from "react"
import { Link } from "gatsby"

import { Container } from "@components/Common"
import Logo from "@components/Logo"

import styles from "./Header.module.css"
import Navigation from "@components/Navigation"
import SocialIcons from "../../SocialIcons/SocialIcons"

export default function Header() {
  return (
    <header className={styles.Header} aria-label="Website Header">
      <Container modifiers={styles.Content}>
        <Link className={styles.HeaderLogo} to="/">
          <Logo />
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
      </Container>
    </header>
  )
}

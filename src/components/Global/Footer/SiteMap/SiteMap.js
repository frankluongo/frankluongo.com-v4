import React from "react"

import Navigation from "@components/Navigation"
import FooterHeading from "../FooterHeading"

import styles from "./SiteMap.module.css"

export default function SiteMap() {
  return (
    <>
      <FooterHeading>Sitemap</FooterHeading>
      <Navigation
        navClass={styles.SiteMapNav}
        ulClass={styles.SiteMapUl}
        liClass={styles.SiteMapLi}
        linkClass={`${styles.SiteMapLink} h5`}
      />
    </>
  )
}

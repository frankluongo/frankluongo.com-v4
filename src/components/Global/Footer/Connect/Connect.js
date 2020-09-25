import React from "react"

import SocialIcons from "@components/SocialIcons"
import FooterHeading from "../FooterHeading"

import styles from "./Connect.module.css"

export default function Connect() {
  return (
    <div>
      <FooterHeading>Connect</FooterHeading>
      <SocialIcons
        ulClass={styles.ConnectSocialUl}
        liClass={styles.ConnectSocialLi}
        linkClass={styles.ConnectSocialLink}
        iconClass={styles.ConnectSocialIcon}
      />
    </div>
  )
}

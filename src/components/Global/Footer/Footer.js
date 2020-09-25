import React from "react"

import { Container, Grid } from "@components/Common"
import Logo from "@components/Logo"

import BusinessDetails from "./BusinessDetails"
import ContactInfo from "./ContactInfo"
import Availability from "@components/Availability"
import SiteMap from "./SiteMap"
import Connect from "./Connect"

import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <Container>
          <Logo className={styles.Logo} />
          <Grid cols="3">
            <BusinessDetails />
            <ContactInfo />
            <div className={styles.Availability}>
              <Availability />
            </div>
          </Grid>
          <div className={styles.FooterModule}>
            <SiteMap />
          </div>
          <div className={styles.FooterModule}>
            <Connect />
          </div>
        </Container>
      </footer>
      <section className={`${styles.Copyright} h6`}>
        &copy; {new Date().getFullYear()} FLDC, LLC
      </section>
    </>
  )
}

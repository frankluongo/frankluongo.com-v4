import React from "react"

import { Container, Grid } from "@components/Common"

import styles from "./Footer.module.css"
import BusinessDetails from "./BusinessDetails"

export default function Footer() {
  return (
    <>
      <footer className={styles.Footer}>
        <Container>
          <Grid cols="3">
            <BusinessDetails />
            <div>contact info</div>
            <div>availability</div>
          </Grid>
        </Container>
      </footer>
      <section className={`${styles.Copyright} h6`}>
        &copy; {new Date().getFullYear()} FLDC, LLC
      </section>
    </>
  )
}

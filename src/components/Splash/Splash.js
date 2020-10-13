import React from "react"

import { Container } from "@components/Common"
import { IconChevronDown } from "@components/Icons"

import styles from "./Splash.module.css"

export default function Splash({ children, fullWidth, header, ...props }) {
  return (
    <div className={styles.SplashWrapper} data-no-margin>
      {header && (
        <header className={styles.SplashHeader}>
          <h2 className="secondary-font black uppercase">{header}</h2>
          <IconChevronDown className={styles.Icon} />
        </header>
      )}
      <div className={styles.Splash}>
        <div className={styles.SplashBg} {...props} />
        {fullWidth ?
          (
            <div className={styles.SplashContainer} data-no-margin>
              {children}
            </div>
          ) : (
          <Container modifiers={styles.SplashContainer} data-no-margin>
            {children}
          </Container>
        )}
      </div>
    </div>
  )
}

Splash.defaultProps = {
  fullWidth: false
}

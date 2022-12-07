import React from "react"

import { IconChevronDown } from "#components/Icons"

import * as styles from "./Splash.module.css"

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
        {fullWidth ? (
          <div className={styles.SplashContainer} data-no-margin>
            {children}
          </div>
        ) : (
          <section
            className={`container ${styles.SplashContainer}`}
            data-no-margin
          >
            {children}
          </section>
        )}
      </div>
    </div>
  )
}

Splash.defaultProps = {
  fullWidth: false,
}

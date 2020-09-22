import React, { useRef, useState, useEffect } from "react"

import styles from "./ColorSwatch.module.css"

import { rgbToHex } from "@helpers"

export function ColorSwatch({ background, backgroundColor, title }) {
  const ref = useRef(null)
  const [hex, setHex] = useState("")

  useEffect(getAndSetHex, [ref])

  return (
    <div className={styles.Swatch}>
      <div
        className={styles.Color}
        style={{ background, backgroundColor }}
        ref={ref}
      />
      <div className={styles.Title}>{title}</div>
      {backgroundColor && <div className={styles.Hex}>{hex}</div>}
    </div>
  )

  function getAndSetHex() {
    if (!ref || !ref.current) return () => false
    const styles = window.getComputedStyle(ref.current)
    const rgb = convertToNums(styles.getPropertyValue("background-color"))
    setHex(rgbToHex(rgb[0], rgb[1], rgb[2]))
  }

  function convertToNums(rgbString) {
    return rgbString
      .replace("rgb(", "")
      .replace(")", "")
      .replace(" ", "")
      .split(",")
      .map(item => parseInt(item))
  }
}

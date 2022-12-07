import React from "react"

import * as css from "./Box.module.css"

export const boxOptions = {
  sizes: {
    0.25: 0.25,
    1: 1,
    1.5: 1.5,
  },
  styles: {
    gradientBlue: "gradient-blue",
    gradientRed: "gradient-red",
    light: "light",
  },
}

export const Box = ({ children, extraClasses, size, style, Tag }) => {
  return (
    <Tag
      className={`${css.Box} ${extraClasses}`}
      data-size={size}
      data-style={style}
    >
      <div className="pos:rel z2">{children}</div>
    </Tag>
  )
}

Box.defaultProps = {
  extraClasses: "",
  size: "1",
  style: "light",
  Tag: "div",
}

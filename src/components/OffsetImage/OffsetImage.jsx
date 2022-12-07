import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const OffsetImage = ({ alt, id, image, ...props }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const img = document.querySelector(`#${id} img`)
    setTimeout(() => {
      const img = document.querySelector(`#${id} img`)
      setOffset(img.getBoundingClientRect().height * 0.3)
    }, 100)
    function onResize([el]) {
      setOffset(el.contentRect.height * 0.3)
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(img)
    return () => resizeObserver.unobserve(img)
  }, [id])

  const src = getImage(image)
  return (
    <div id={id} style={{ marginTop: `-${offset}px` }}>
      <GatsbyImage image={src} alt={alt} {...props} />
    </div>
  )
}

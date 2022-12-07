import { useEffect, useState } from "react"

import { PHOTOS, TIME, HOUR, FEED } from "#utils/constants"

export function useInstagram() {
  const [photos, setPhotos] = useState(null)

  useEffect(init, [])

  return photos

  function init() {
    const now = Date.now()
    const storedPhotos = JSON.parse(localStorage.getItem(PHOTOS))
    const currentTime = getCurrentTime()
    const hasBeenAnHour = now - currentTime >= HOUR

    async function getPhotos() {
      if (!storedPhotos || hasBeenAnHour) {
        try {
          const res = await fetch(FEED)
          const { data } = await res.json()
          const cleanPhotos = cleanPhotosData(data)
          localStorage.setItem(PHOTOS, JSON.stringify(cleanPhotos))
          localStorage.setItem(TIME, Date.now())
          setPhotos(cleanPhotos)
        } catch (e) {
          console.log(e)
        }
      } else {
        setPhotos(storedPhotos)
      }
    }

    getPhotos()

    function cleanPhotosData(photos) {
      return photos.user.edge_owner_to_timeline_media.edges
    }
    function getCurrentTime() {
      if (!localStorage.getItem(TIME)) {
        localStorage.setItem(TIME, Date.now())
      }
      return parseInt(localStorage.getItem(TIME))
    }
  }
}

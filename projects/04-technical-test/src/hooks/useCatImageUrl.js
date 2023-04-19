import { useEffect, useState } from 'react'

import { getCatImage } from '../services/catImage'

export function useCatImageUrl ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    if (!fact) return

    setIsImageLoading(true)
    getCatImage({ fact }).then(newImageUrl => {
      setCatImageUrl(newImageUrl)
      setTimeout(() => {
        setIsImageLoading(false)
      }, 300)
    })
  }, [fact])
  return { catImageUrl, isImageLoading }
}

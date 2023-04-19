import { useEffect, useState } from 'react'

const API_CATS = 'https://cataas.com/cat/says'

export function useCatImageUrl ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState(null)

  console.log('render')
  useEffect(() => {
    if (!fact) return
    const getCatImage = async () => {
        try {
          const firstThreeWordFact = fact.split(' ').slice(0, 3).join(' ')
          const response = await fetch(`${API_CATS}/${firstThreeWordFact}`)
          const { url } = response
          setCatImageUrl(url)
        } catch (error) {
          console.log(error)
        }
    }
    getCatImage()
  }, [fact])
  return { catImageUrl }
}

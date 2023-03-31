/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react'

const API_FACTS = 'https://catfact.ninja/fact'
const API_CATS = 'https://cataas.com/cat/says'

export default function App () {
  const [fact, setFact] = useState(null)
  const [catImageSrc, setCatImageSrc] = useState(null)
  const [isChangeFact, isSetChangeFact] = useState(false)

  useEffect(() => {
    const getRandomFact = async () => {
      try {
        const response = await fetch(API_FACTS)
        const { fact: factText } = await response.json()
        setFact(factText)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomFact()
  }, [isChangeFact])

  useEffect(() => {
    const getCatImage = async () => {
      if (fact) {
        try {
          const firstWordFact = fact.split(' ')[0]
          const response = await fetch(`${API_CATS}/${firstWordFact}`)
          const { url } = response
          setCatImageSrc(url)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getCatImage()
  }, [fact])

  const isImageLoading = catImageSrc === null || isChangeFact

  return (
    <>
      <main className='container'>
        <p className='label__fact'>My random fact</p>
        <p className='fact'>{fact}</p>
        {
          isImageLoading
            ? <span className='loader' />
            : <picture className='fact__cat-picture'>
              <img src={catImageSrc} alt={`Cat image says ${fact}`} className='fact__cat-img' />
            </picture>
        }
        <button className='fact__button' onClick={() => { isSetChangeFact(true) }}>Change cat-fact</button>
      </main>
    </>
  )
}

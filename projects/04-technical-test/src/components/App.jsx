/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

// Componnets
import Fact from './Fact'
import CatImage from './CatImage'
// Custom hooks
import { useCatImageUrl } from '../hooks/useCatImageUrl'
import { useCatFact } from '../hooks/useCatFact'

export default function App () {
  const { fact, getCatFact } = useCatFact()
  const { catImageUrl, isImageLoading } = useCatImageUrl({ fact })

  const handleClick = async () => {
    getCatFact()
  }

  return (
    <>
      <main className='container'>
        <Fact fact={fact} />
        <CatImage catImageUrl={catImageUrl} isImageLoading={isImageLoading} />
        <button className='fact__button' onClick={handleClick}>Change cat-fact</button>
      </main>
    </>
  )
}

/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

// Custom hooks
import { useCatImageUrl } from '../hooks/useCatImageUrl'
import { useCatFact } from '../hooks/useCatFact'

export default function App () {
  const { fact, getCatFact } = useCatFact()
  const { catImageUrl } = useCatImageUrl({ fact })

  const handleClick = async () => {
    getCatFact()
  }

  const isImageLoading = catImageUrl === null

  return (
    <>
      <main className='container'>
        <p className='label__fact'>My random fact</p>
        {fact && <p className='fact'>{fact}</p>}
        <div className=''>
          {
            isImageLoading
              ? <span className='loader' />
              : <picture className='fact__cat-picture'>
                <img src={catImageUrl} alt={`Cat image says ${fact}`} className='fact__cat-img' />
              </picture>
          }
        </div>
        <button className='fact__button' onClick={handleClick}>Change cat-fact</button>
      </main>
    </>
  )
}

import React from 'react'

export default function CatImage ({ isImageLoading, catImageUrl }) {
  return (
    <section>
      {
        isImageLoading
          ? <span className='loader' />
          : (
            <picture className='fact__cat-picture'>
              <img src={catImageUrl} alt='Cat Image' className='fact__cat-img' />
            </picture>
          )
      }
    </section>
  )
}

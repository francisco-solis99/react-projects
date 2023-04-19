import React from 'react'

export default function Fact ({ fact }) {
  return (
    <section>
      <h2 className='label__fact'>My random fact</h2>
      {fact && <p className='fact'>{fact}</p>}
    </section>
  )
}

import React from 'react'

import { Square } from './Square';

export function Winner({winner, resetGame}) {
  if(winner === null) return;
  return (
        <section className='winner'>
          <div className='text'>
            <h2>
              {
                winner === false
                  ? 'Empate'
                  : 'Gano:'
              }
            </h2>
          </div>
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Start again</button>
          </footer>
        </section>
  )
}

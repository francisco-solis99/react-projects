import React, { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square }  from './components/Square'
import { Winner } from './components/Winner'
import { TURNS } from './constants'
import { checkGameEnded, checkWinner } from './logic/board'




function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)


  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  // Update the board
  function updateBoard(index) {

    // check if there is a winner or the square is occupied
    if (board[index] || winner) return

    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);

    // Check if there is a winner
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }
    // there is a tie?
    else if(checkGameEnded(newBoard)) {
      setWinner(false)
      return
    }
    // Update the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset the Game</button>
      <section className='game'>
        {
          board.map((item, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {item}
              </Square>
            )
          })
        }
      </section>

      {/* Turns section */}
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>


      {/* Winner modal */}
      <Winner winner={winner} resetGame={resetGame}/>

    </main>
  )
}

export default App

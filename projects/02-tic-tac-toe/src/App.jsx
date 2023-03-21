import React, { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { Winner } from './components/Winner'
import { TURNS } from './constants'
import { checkGameEnded, checkWinner } from './logic/board'
import { saveGameStorage, resetGameStorage } from './logic/storage'

// TODO: componetized the board, the winner and the turn section and use the useEffect to save the game when change the turn or change the board

function App () {
  // Board state
  // when you use a callback in the useState, that Callback returns the value you wanted in that state
  const [board, setBoard] = useState(() => {
    // When you wanna initialice this state just one time you nee to check the local storage
    const prevBoard = window.localStorage.getItem('board')
    if (!prevBoard) return Array(9).fill(null)
    return JSON.parse(prevBoard)
  })
  // Turn state
  const [turn, setTurn] = useState(() => {
    const prevTurn = window.localStorage.getItem('turn')
    return prevTurn ?? TURNS.X
  })
  // Winner state
  const [winner, setWinner] = useState(null)

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)

    resetGameStorage()
  }

  // Update the board
  function updateBoard (index) {
    // check if there is a winner or the square is occupied
    if (board[index] || winner) return

    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Check if there is a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkGameEnded(newBoard)) { // there is a tie?
      setWinner(false)
    }
    // Update the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameStorage({ board: newBoard, turn: newTurn })
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
      <Winner winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App

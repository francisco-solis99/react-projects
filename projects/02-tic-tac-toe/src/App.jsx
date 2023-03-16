import React, { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNERS_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


// TODO: - Check a winner, Check if is a tie, Reset the game

const Square = ({ children, index, isSelected = false, updateBoard }) => {

  const classNameSquare = isSelected ? 'square is-selected' : 'square'

  function handleClick() {
    updateBoard(index)
  }


  return (
    <div onClick={handleClick} className={classNameSquare}>
      {children}
    </div>
  )
}



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

  // Check if teh game is ended
  const checkGameEnded = (boardToCheck) => boardToCheck.every(square => square !== null)

  // Check if there is a winner
  const checkWinner = (boardToCheck) => {
    for(const combo of WINNERS_COMBOS) {
      const [a, b, c] = combo

      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        const newWinner = boardToCheck[a];
        return newWinner;
      }
    }
    return null;
  }

  // Updat the board
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
      setWinner(newWinner)
    }
    // there is a tie?
    if(checkGameEnded(newBoard)) {
      setWinner(false)
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
      {
        winner !== null &&
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
      }

    </main>
  )
}

export default App

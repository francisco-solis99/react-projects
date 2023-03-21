import { WINNERS_COMBOS } from '../constants'

// Check if teh game is ended
export const checkGameEnded = (boardToCheck) => boardToCheck.every(square => square !== null)

// Check if there is a winner
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNERS_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      const newWinner = boardToCheck[a]
      return newWinner
    }
  }
  return null
}

// TODO: Random turn at the beginning, multiplayer and multiple rounds

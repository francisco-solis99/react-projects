export const saveGameStorage = ({ board, turn }) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.clear('board')
  window.localStorage.clear('turn')
}

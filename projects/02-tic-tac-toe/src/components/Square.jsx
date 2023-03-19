

export  function Square({ children, index, isSelected = false, updateBoard }) {

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

import React from 'react'

import './App.css'

function App () {
  return (
    <div className='wrapper'>
      <header>
        <h1>Searcher Movies 🍿</h1>
        <form>
          <input type='text' placeholder='Avengers, Star Wars, The matrix' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <h2>Here the movies 🍿</h2>
      </main>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'

import responseMovies from './mocks/with_results.json'
// import withoutMovies from './mocks/without_results.json'

// Components
import { Movies } from './components/Movies'

function App () {
  const movies = responseMovies.Search

  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

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
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App

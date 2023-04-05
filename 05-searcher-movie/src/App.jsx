import React from 'react'
import './App.css'

import responseMovies from './mocks/with_results.json'
// import withoutMovies from './mocks/without_results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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
        {
          hasMovies
          ? (
            <ul>
              {
              movies.map(movie => {
                return (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={`Poster - ${movie.Title}`} />
                  </li>
                )
              })
            }
            </ul>
          )
          : <p>No results for searching 👀</p>
        }
      </main>
    </div>
  )
}

export default App

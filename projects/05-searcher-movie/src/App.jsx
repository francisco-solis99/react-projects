import React from 'react'
import './App.css'

// Components
import { Movies } from './components/Movies'

// Custom Hooks
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const { query, setQuery, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChangeQuery = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  // Use the form in a controlled way (by the state) perhaps you can use the uncontrolled way which is in most of the cases better

  return (
    <div className='wrapper'>
      <header>
        <h1>Searcher Movies 🍿</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChangeQuery} value={query} placeholder='Avengers, Star Wars, The matrix' />
          <button type='submit'>Search</button>
        </form>
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App

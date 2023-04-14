import React, { useState } from 'react'
import './App.css'

// Components
import { Movies } from './components/Movies'

// Custom Hooks
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
    getMovies({ query })
  }

  const handleChangeQuery = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  const handleChangeSort = () => setSort(!sort)

  // Use the form in a controlled way (by the state) perhaps you can use the uncontrolled way which is in most of the cases better

  return (
    <div className='wrapper'>
      <header>
        <h1>Searcher Movies 🍿</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChangeQuery} value={query} placeholder='Avengers, Star Wars, The matrix' />
          <input type='checkbox' onChange={handleChangeSort} />
          <button type='submit'>Search</button>
        </form>
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App

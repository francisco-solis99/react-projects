import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = async ({ query }) => {
    try {
      setLoading(true)
      const movies = await searchMovies({ query })
      setMovies(movies)
    } catch (e) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}

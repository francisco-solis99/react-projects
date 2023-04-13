import { useState, useRef } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  const getMovies = async () => {
    // void to search both or more times the same query search
    if (query === previousQuery.current) return
    try {
      setLoading(true)
      // Save the ref (the useRef does not chane between renders and does no make the component render again)
      previousQuery.current = query
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

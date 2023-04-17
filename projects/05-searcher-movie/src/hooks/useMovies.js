import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    console.log('getting movies')
    // Avoid to search both or more times the same query search
    if (query === previousQuery.current) return
    try {
      setLoading(true)
      // Save the ref (the useRef does not change between renders and does no make the component render again)
      previousQuery.current = query
      const movies = await searchMovies({ query })
      setMovies(movies)
    } catch (e) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // useMemo allow memoiazate such computing that we want to avoid execute it at less the dependencies that we defined has been changed
  // ensure useMmeo really has sense because improve the performace
  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies]) // just compute this code when the sprt and movies depndencies change

  return { movies: sortedMovies, getMovies, loading, sort }
}

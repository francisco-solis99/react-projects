import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstTimeInput = useRef(true)

  useEffect(() => {
    if (isFirstTimeInput.current) {
      isFirstTimeInput.current = query === ''
      return
    }

    if (query === '') {
      setError('There is not a movie with blank space')
      return
    }

    if (query.length < 2) {
      setError('The movie to search must have at least more tha 1 character')
      return
    }

    setError(null)
  }, [query])

  return { query, setQuery, error }
}

import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState(null)

  const getCatFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {
    getCatFact()
  }, [])
  return { fact, getCatFact }
}

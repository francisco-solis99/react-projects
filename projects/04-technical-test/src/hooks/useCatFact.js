import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState(null)

  const getCatFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  console.log('render 👀')

  useEffect(() => {
    getCatFact()
  }, [])
  return { fact, getCatFact }
}

const API_FACTS = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const response = await fetch(API_FACTS)
    const { fact: factText } = await response.json()
    return factText
  } catch (error) {
    console.log(error)
  }
}

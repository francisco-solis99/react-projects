const API_CATS = 'https://cataas.com/cat/says'

export const getCatImage = async ({ fact }) => {
  try {
    const firstThreeWordFact = fact.split(' ').slice(0, 3).join(' ')
    const response = await fetch(`${API_CATS}/${firstThreeWordFact}`)
    const { url } = response
    return url
  } catch (error) {
    console.log(error)
  }
}

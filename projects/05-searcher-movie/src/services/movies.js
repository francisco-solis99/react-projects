const API_KEY = 'c1b45680'
export async function searchMovies ({ query }) {
  if (query === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const { Search: movies } = await response.json()
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
    return mappedMovies
  } catch (error) {
    throw new Error('Error searching movies')
  }
}

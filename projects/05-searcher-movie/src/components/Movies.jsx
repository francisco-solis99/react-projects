 function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
    movies.map(movie => {
      return (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={`Poster - ${movie.Title}`} />
        </li>
      )
    })
  }
    </ul>
  )
}

 function NoResults () {
  return (
    <p>No results for searching 👀</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoResults />
  )
}

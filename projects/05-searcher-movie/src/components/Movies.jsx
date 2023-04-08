 function ListOfMovies ({ movies }) {
  return (
    <ul className='movies__list'>
      {
    movies.map(movie => {
      return (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={`Poster - ${movie.title}`} />
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

export default function DataRows({movie}) {
    return (
      <div>
        <h2>{movie.name}</h2>
        <p>Year: {movie.year}</p>
        <p>Age limit: {movie.ageLimit}</p>
        <p>Genres: {movie.genres.map((x) => x + ' ')}</p>
        <p>Director: {movie.director.firstName} {movie.director.lastName}</p>
        <p>Actors: {movie.actors.map(actor => (
              <span key={actor.id}>{actor.firstName} {actor.lastName}</span>
            ))}</p>
        <p>{movie.synopsis}</p>
        <p>Rating: {movie.rating}/5</p>
      </div>  
    )
}
import Movie from './Movie'

// TODO add a backup call to sample database call in case the API call fails

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}`);
  const res = await data.json();
  return (
    <main>
      <h1>Movies pulled from movie database</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}

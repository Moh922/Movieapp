import { useState, useEffect } from "react";

import MovieList from "../compnents/movie/MovieList";

function MoviesListScetion() {
    const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://img.omdbapi.com/?apikey=[yourkey]&"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = []; 

        for (const key in data) {
          const movie = {
            id: key,
            ...data[key],
          };

          movies.push(movie);
        }

        setIsLoading(false);
        setLoadedMovies(movies);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
        <h1>Movie List</h1>
        <MovieList movies={loadedMovies} />
    </section>
  );
}

export default MoviesListScetion;
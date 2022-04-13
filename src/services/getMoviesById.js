const getMoviesById = async (movie_id) => {
    console.log('llega a getMoviesid')
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=fb57b21a7894c177f41e137dd8b3e747&language=en-US`,
    {
      method: "GET",
    }
  );
  const movieData = await movie.json();
  console.log(movieData, 'movie in getmoviesid')
  return movieData;
};

export default getMoviesById;

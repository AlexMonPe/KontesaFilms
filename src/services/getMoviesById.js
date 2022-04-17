const getMoviesById = async (movie_id) => {
  const movie = await fetch(
    `https://api-restfull-movies-nodejs.herokuapp.com/movies/${movie_id}`,
    {
      method: "GET",
    }
  );
  const movieData = await movie.json();
  return movieData;
};

export default getMoviesById;

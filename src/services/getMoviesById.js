const getMoviesById = async (movie_id) => {
    console.log('llega a getMoviesid')
  const movie = await fetch(
    `https://api-restfull-movies-nodejs.herokuapp.com/movies/${movie_id}`,
    {
      method: "GET",
    }
  );
  const movieData = await movie.json();
  console.log(movieData, 'movie in getmoviesid')
  return movieData;
};

export default getMoviesById;

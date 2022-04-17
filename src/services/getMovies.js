const getMovies = async () => {
  const movies = await fetch(
    "https://api-restfull-movies-nodejs.herokuapp.com/movies",
    {
      method: "GET",
    }
  );
  const moviesData = await movies.json();
  return moviesData;
};

export default getMovies;

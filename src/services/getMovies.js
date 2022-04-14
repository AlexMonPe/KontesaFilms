const getMovies = async () => {
  const movies = await fetch(
    "https://api-restfull-movies-nodejs.herokuapp.com/movies",
    {
      method: "GET",
    }
  );
  const moviesData = await movies.json();
  console.log(moviesData,'movies in getmoviees');
  return moviesData;
};

export default getMovies;


const getPopularMovies = async () => {
  const movies = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=fb57b21a7894c177f41e137dd8b3e747&language=en-US&page=1",
    {
      method: "GET",
    }
  );
  const moviesData = await movies.json();
  console.log(moviesData);
  return moviesData;
};

export default getPopularMovies;

//fb57b21a7894c177f41e137dd8b3e747

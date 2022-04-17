import { useNavigate } from "react-router-dom";

const HomeMovies = ({ movies, text }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {movies.map((movie) => {
        if (movie.genre === text)
          return (
            <div className="movies">
              <img
                className="mb-4 border-2 border-amber-400 shadow-sm shadow-amber-400"
                src={movie.image}
              ></img>
              <button
                className="p-1 underline hover:text-white"
                onClick={() => navigate("/detail/" + movie._id)}
              >
                {movie.title}
              </button>
            </div>
          );
      })}
    </div>
  );
};
export default HomeMovies;

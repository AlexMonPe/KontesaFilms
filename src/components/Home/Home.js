import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getPopularMovies from "../../services/getPopularMovies.js";
import "./Home.css";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies, "popularmovies before setState");
        setPopularMovies(popularMovies.results);
      } catch (error) {
        console.log(error, "Fatal error getting Popular Movies");
      }
    };
    loadPopularMovies();
  }, []);
  const basePathImg = "http://image.tmdb.org/t/p/w200";
  console.log(popularMovies, 'content of popular movies before return')
  return (
    <div className="home-page">
        <h3 className="text-black bg-amber-400 w-40 h-8 underline p-1 mb-6 font-bold text-center">POPULAR MOVIES</h3>
      <div className="flex flex-row flex-wrap">
          {popularMovies.map(movie => {
            return(
                <div className="popular-movies">
                    <a className="cursor-pointer" href=""><img className="mb-4 hover:border-2 border-amber-400" src={`${basePathImg}/${movie.poster_path}`}></img></a>
                    <button className="p-1 underline hover:text-white " onClick={()=> navigate("/detail/" + movie.id)}>{movie.title}</button>
                </div>
            )
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Home;

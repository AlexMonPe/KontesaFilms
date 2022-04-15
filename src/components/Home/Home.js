import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeMovies from "../../containers/HomeMovies/HomeMovies.js";
import getMovies from "../../services/getMovies.js";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await getMovies();
        console.log(movies, "movies before setState");
        setMovies(movies);
      } catch (error) {
        console.log(error, "Fatal error getting mMovies");
      }
    };
    loadMovies();
  }, []);
  console.log(movies, 'content of popular movies before return')
  return (
    <div className="home-page">
        <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">DRAMA</h3>
        <HomeMovies movies={movies} text={"Drama"}/>
        <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">ANIMATION</h3>
        <HomeMovies movies={movies} text={"Animation"}/>
        <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">SCIENCE FICTION</h3>
        <HomeMovies movies={movies} text={"Science Fiction"}/>
        <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">THRILLER</h3>
        <HomeMovies movies={movies} text={"Thriller"}/>
        <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">HORROR</h3>
        <HomeMovies movies={movies} text={"Horror"}/>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomeMovies from "../../containers/HomeMovies/HomeMovies.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import actionCreator from "../../store/actionTypes.js";
import { SET_MOVIES } from "../../store/typesVar.js";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
    useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await apiConsumer.getMovies();
        setMovies(movies);
        dispatch(actionCreator(SET_MOVIES, movies));
      } catch (error) {
        console.log(error, "Fatal error getting Movies");
      }
    };
    loadMovies();
  }, []);
  return (
    <div className="home-page">
      <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">
        DRAMA
      </h3>
      <HomeMovies movies={movies} text={"Drama"} />
      <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">
        ANIMATION
      </h3>
      <HomeMovies movies={movies} text={"Animation"} />
      <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">
        SCIENCE FICTION
      </h3>
      <HomeMovies movies={movies} text={"Science Fiction"} />
      <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">
        THRILLER
      </h3>
      <HomeMovies movies={movies} text={"Thriller"} />
      <h3 className="text-amber-400 bg-black w-40 h-8 underline p-1 mb-6 font-bold text-center border-amber-400 border">
        HORROR
      </h3>
      <HomeMovies movies={movies} text={"Horror"} />
    </div>
  );
};

export default Home;

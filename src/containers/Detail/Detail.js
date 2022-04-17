import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import usePopup from "../../hooks/usePopup";
import getMoviesById from "../../services/getMoviesById";
import postRent from "../../services/postRent";
import "./Detail.css";

const Detail = () => {
  const params = useParams();
  const popUp = usePopup;
  const navigate = useNavigate();
  const userId = useSelector((state) => state.tokenInfo.id);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const foundedMovie = await getMoviesById(params.id);
        setMovie(foundedMovie[0]);
      } catch (error) {
        console.log(error, "Fatal error getting  movie");
      }
    };
    loadMovie();
  }, []);
  return (
    <div className="movieCard">
      <div className="containerCard">
        <img className="imagemovieCard" src={movie.image}></img>
        <div className="flex flex-row gap-4 justify-center items-center flex-wrap p-4">
          <span className="text-amber-400 underline leading-3">Genre: </span>
          <span>{movie.genre}</span>
          <span className="text-amber-400 underline leading-3">Actor: </span>
          <span>{movie.actor}</span>
          <span className="text-amber-400 underline leading-3">Price: </span>
          <span>{movie.price}€</span>
          <div>
            <button
              className="trailer"
              onClick={() => {
                postRent(movie._id, movie.price, userId);
                popUp(`You rented ${movie.title}`);
                setTimeout(() => navigate("/"));
              }}
            >
              Rent
            </button>
            <button className="trailer">
              <a href={movie.trailer}>Play Trailer</a>
            </button>
          </div>
        </div>

        <p className="flex flex-col items-center text-center">
          <h2 className="p-6 text-3xl text-amber-400 leading-3 underline mb-6">
            Overview
          </h2>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default Detail;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { apiConsumer } from "../../services/apiConsumer";
import actionCreator from "../../store/actionTypes";
import { SHOW_POPUP } from "../../store/typesVar";
import "./Detail.css";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.tokenInfo.id);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const foundedMovie = await apiConsumer.getMoviesById(params.id);
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
              onClick={async () => {
                await apiConsumer.postRent(movie._id, movie.price, userId);
                dispatch(
                  actionCreator(SHOW_POPUP, `You rented ${movie.title}`)
                );
                setTimeout(() => {
                  navigate("/");
                }, 3500);
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

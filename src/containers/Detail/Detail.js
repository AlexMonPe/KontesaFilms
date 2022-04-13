import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMoviesById from "../../services/getMoviesById";
import "./Detail.css"

const Detail = () => {
  const params = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const foundedMovie = await getMoviesById(params.id);
        console.log(foundedMovie, "founded movie antes del setmovie");
        setMovie(foundedMovie);
      } catch (error) {
        console.log(error, "Fatal error getting  movie");
      }
    };
    loadMovie();
  }, []);
  console.log(movie, "movie before return");
  const basePathImg = "http://image.tmdb.org/t/p/w200";
  return (
    <div className="detailPage">
      <div className="text-white">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
//<img src={`${basePathImg}/${movie.poster_path}`}></img>
export default Detail;

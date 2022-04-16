import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectValue, setSelectValue] = useState("title");
  const movies = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value, searchTerm, "value of input");
  };
  const filterTitle = (e) => {
    setSelectValue(e.target.value);
  };

  console.log(selectValue);
  useEffect(() => {
    let results = [];
    if (selectValue == "title") {
      results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
    }
    if (selectValue == "actor") {
        results = movies.filter((movie) =>
          movie.actor.toLowerCase().includes(searchTerm)
        );
      }
    if (selectValue == "genre") {
      results = movies.filter((movie) =>
        movie.genre.toLowerCase().includes(searchTerm)
      );
    }
    if (selectValue == "id") {
        results = movies.filter((movie) =>
          movie._id.toLowerCase().includes(searchTerm)
        );
      }
    setSearchResults(searchTerm ? results : movies /*array of movies*/);
  }, [searchTerm]);
  return (
    <div className="search">
      <div>
        <input className="inputSearch" type="text" placeholder="Search" onChange={handleChange}></input>
      <select onChange={filterTitle} className="selectSearch">
        <option value="title">title</option>
        <option value="genre">genre</option>
        <option value="actor">actor</option>
        <option value ="id">Id</option>
      </select>
      </div>
      
      <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
        {searchResults.map((movie) => (
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
        ))}
      </div>
    </div>
  );
};

export default Search;

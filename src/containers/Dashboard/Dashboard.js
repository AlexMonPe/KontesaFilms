import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import getMovies from "../../services/getMovies";
import getRents from "../../services/getRents";
import getUsers from "../../services/getUsers";
import "./Dashboard.css";

const Dashboard = () => {
  const [rents, setRents] = useState();
  const [users, setUsers] = useState();
  const [movies, setMovies] = useState();

  const showMovies = async () => {
    const moviesRes = await getMovies();
    setMovies(moviesRes);
    setRents(undefined);
    setUsers(undefined);
  };
  const showRents = async () => {
    const rentsRes = await getRents();
    setRents(rentsRes);
    setMovies(undefined);
    setUsers(undefined);
    console.log(rentsRes, "data rentss");
  };
  const showUsers = async () => {
    const usersRes = await getUsers();
    setUsers(usersRes);
    setMovies(undefined);
    setRents(undefined);
    console.log(usersRes, "data userss");
  };
  //useEffect(() => {}, []);

  console.log(movies, "movies despues de setmovies");
  return (
    <div className="dashboard">
      <div className="flex flex-row">
        <div className="dashboardPanel">
          <h2 className="font-bold p-3 border-b-2 border-fuchsia-400 text-center">
            DASHBOARD
          </h2>
          <button className="dashboardLinks" onClick={() => showMovies()}>
            ALL MOVIES
          </button>
          <a href="#" className="dashboardLinks" onClick={() => showRents()}>
            ALL RENTS
          </a>
          <a href="#" className="dashboardLinks" onClick={() => showUsers()}>
            ALL USERS
          </a>
          {movies && (
            <>
              <p className="text-white font-bold border-2 bg-red text-center">
                Total Movies: {movies.length}
              </p>
            </>
          )}
          {rents && (
            <p className="text-white font-bold border-2 bg-red text-center">
              Total Rents: {rents.length}
            </p>
          )}
          {users && (
            <p className="text-white font-bold border-2 bg-red text-center">
              Total Users: {users.length}
            </p>
          )}
        </div>
        {movies && (
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
            {movies.map((movie) => {
              return (
                <div>
                  <img className="w-40 h-60" src={movie.image}></img>
                </div>
              );
            })}
          </div>
        )}
        {rents && (
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
            {rents.map((rent) => {
              return (
                <div className="rentsCard">
                  <p className="text-white bg-red p-2">
                    <p>Email:</p> {rent.idUser.email}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>Rent date:</p>
                    {rent.rent_date}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>Return date:</p>
                    {rent.return_date}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>Price: </p>
                    {rent.totalPrice}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>Title: </p>
                    {rent.idMovie.title}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {users && (
          <div className="flex p-6 gap-4 flex-row flex-wrap">
            {users.map((user) => {
              return (
                <div className="userCard">
                  <p className="text-white bg-red p-2">
                    <p>Name:</p> {user.name}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>email:</p>
                    {user.email}
                  </p>
                  <p className="text-white bg-red p-2">
                    <p>Role:</p>
                    {user.role}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

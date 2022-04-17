import { useState } from "react";
import { useSelector } from "react-redux";
import { apiConsumer } from "../../services/apiConsumer";
import "./Dashboard.css";

const Dashboard = () => {
  const moviesState = useSelector((state) => state.movies);
  const [rents, setRents] = useState();
  const [users, setUsers] = useState();
  const [movies, setMovies] = useState();

  const showMovies = async () => {
    setMovies(moviesState);
    setRents(undefined);
    setUsers(undefined);
  };
  const showRents = async () => {
    const rentsRes = await apiConsumer.getRents();
    setRents(rentsRes);
    setMovies(undefined);
    setUsers(undefined);
  };
  const showUsers = async () => {
    const usersRes = await apiConsumer.getUsers();
    setUsers(usersRes);
    setMovies(undefined);
    setRents(undefined);
  };
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
          <button className="dashboardLinks" onClick={() => showRents()}>
            ALL RENTS
          </button>
          <button className="dashboardLinks" onClick={() => showUsers()}>
            ALL USERS
          </button>
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
          <div className="rentsGrid">
            <div className="rentsTable">
              <div className="font-bold">EMAIL</div>
              <div className="font-bold">TITLE</div>
              <div className="font-bold">RENT DATE</div>
              <div className="font-bold">RETURN DATE</div>
              <div className="font-bold">PRICE</div>
            </div>
            {rents.map((rent) => {
              return (
                <div className="rentsCard">
                  <p className="text-white bg-red p-2 border">
                  {rent.idUser.email}
                  </p>
                  <p className="text-white bg-red p-2">
                    {rent.idMovie.title}
                  </p>
                  <p className="text-white bg-red p-2">
                    {rent.rent_date}
                  </p>
                  <p className="text-white bg-red p-2">
                    {rent.return_date}
                  </p>
                  <p className="text-white bg-red p-2">
                    {rent.totalPrice}
                  </p>
                  
                </div>
              );
            })}
          </div>
        )}
        {users && (
          <div className="rentsGrid">
            <div className="usersTable">
              <div className="font-bold">NAME</div>
              <div className="font-bold">EMAIL</div>
              <div className="font-bold">ROLE</div>
            </div>
            {users.map((user) => {
              return (
                <div className="userCard">
                  <p className="text-white bg-red p-2">{user.name}
                  </p>
                  <p className="text-white bg-red p-2">
                    {user.email}
                  </p>
                  <p className="text-white bg-red p-2">
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

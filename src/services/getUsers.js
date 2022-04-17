const getUsers = async () => {
  const users = await fetch(
    "https://api-restfull-movies-nodejs.herokuapp.com/users/",
    {
      method: "GET",
    }
  );
  const usersData = await users.json();

  return usersData;
};

export default getUsers;

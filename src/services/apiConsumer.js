export const apiConsumer = {
  loginUser: async (loginData) => {
    try {
      let loginUser = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/users/login",
        {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await loginUser.json();
    } catch (error) {
      console.log(error, "error in login user apiconsumer");
    }
  },
  createUser: async (formData) => {
    try {  
      const createUser = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/users/register",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await createUser.json();
    } catch (error) {
      console.log(error, "Error in create user in apiconsumer");
    }
  },
  getMovies: async () => {
    try {
    } catch (error) {
      console.log(error, "error in apiconsumer get movies");
    }
    const movies = await fetch(
      "https://api-restfull-movies-nodejs.herokuapp.com/movies",
      {
        method: "GET",
      }
    );
    const moviesData = await movies.json();
    return moviesData;
  },
  getMoviesById: async (movie_id) => {
    const movie = await fetch(
      `https://api-restfull-movies-nodejs.herokuapp.com/movies/${movie_id}`,
      {
        method: "GET",
      }
    );
    return await movie.json();
  },
  getRents: async () => {
    try {
      const rents = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/rent/",
        {
          method: "GET",
        }
      );
      return await rents.json();
    } catch (error) {
      console.log(error, "error get rents in apiconsumer");
    }
  },
  getRentsByUser: async (idUser) => {
    try {
      const rents = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/rent/byuser/" +
          idUser,
        {
          method: "GET",
        }
      );
      const rentsData = await rents.json();
      return rentsData;
    } catch (error) {
      console.log(error, "error en getrentbyuser");
    }
  },
  getUsers: async () => {
    try {
      const users = await fetch(
        "https://api-restfull-movies-nodejs.herokuapp.com/users/",
        {
          method: "GET",
        }
      );
      return await users.json();
    } catch (error) {
      console.log(error, "error get users in apiconsumer");
    }
  },
  postRent: async (movieId, price, userId)=> {
    try {
        const rentData = {
          idMovie: movieId,
          idUser: userId,
          totalPrice: price,
        };
    
        const createRent = await fetch(
          "https://api-restfull-movies-nodejs.herokuapp.com/rent",
          {
            method: "POST",
            body: JSON.stringify(rentData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return await createRent.json();;
      } catch (error) {
        console.log("Error posting new rent in postRent " + error);
      }
  }
};

const postRent = async (movieId, price, userId) => {
    console.log(movieId, price, userId, 'parametros que llegan a postrent')
    try {
      const rentData = {
        idMovie: movieId,
        idUser: userId,
        totalPrice: price
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
      const createdRent = await createRent.json();
      console.log(createdRent, 'rent creado en postrent')
      return createdRent;
    } catch (error) {
      console.log("Error posting new rent in postRent " + error);
    }
  };

  export default postRent;
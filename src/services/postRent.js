const postRent = async (movieId, price, userId) => {
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
    const createdRent = await createRent.json();
    return createdRent;
  } catch (error) {
    console.log("Error posting new rent in postRent " + error);
  }
};

export default postRent;

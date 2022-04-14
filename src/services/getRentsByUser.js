const getRentsByUser = async (idUser) => {
  try {
    console.log(idUser, "iduserrr");
    const rents = await fetch(
      "https://api-restfull-movies-nodejs.herokuapp.com/rent/byuser/" + idUser,
      {
        method: "GET",
      }
    );
    const rentsData = await rents.json();

    return rentsData;
  } catch (error) {
    console.log(error, "error en getrentbyuser");
  }
};

export default getRentsByUser;

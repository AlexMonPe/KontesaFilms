import { useSelector } from "react-redux";

const getRents = async (idUser) => {
  const rents = await fetch("http://localhost:4000/rent/byuser/" + idUser, {
    method: "GET",
  });
  const rentsData = await rents.json();

  return rentsData;
};

export default getRents;

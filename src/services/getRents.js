const getRents = async () => {
    const rents = await fetch("https://api-restfull-movies-nodejs.herokuapp.com/rent/", {
      method: "GET",
    });
    const rentsData = await rents.json();
  
    return rentsData;
  };
  
  export default getRents;
  
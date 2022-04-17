import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiConsumer } from "../../services/apiConsumer";

import "./Rents.css";

const Rents = () => {
  const idUser = useSelector((state) => state.tokenInfo.id);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const loadRents = async () => {
      try {
        const rents = await apiConsumer.getRentsByUser(idUser);

        setRents(rents);
      } catch (error) {
        console.log(error);
      }
    };
    loadRents(idUser);
  }, []);
  return (
    <div className="rents">
      <div className="trTable">
        <div className="font-bold">MOVIE NAME</div>
        <div className="font-bold">RENT DATE</div>
        <div className="font-bold">RETURN DATE</div>
        <div className="font-bold">PRICE</div>
      </div>
      {rents.map((rent) => {
        return (
          <div className="tableRents">
            <div>
              <h3>{rent.idMovie.title}</h3>
            </div>
            <div>
              <h3>{rent.rent_date}</h3>
            </div>
            <div>
              <h3>{rent.return_date}</h3>
            </div>
            <div>
              <h3>{rent.totalPrice} €</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Rents;

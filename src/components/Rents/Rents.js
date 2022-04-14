import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getRentsByUser from "../../services/getRentsByUser";
import "./Rents.css";

const Rents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = useSelector((state) => state.tokenInfo.id);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const loadRents = async () => {
      try {
        const rents = await getRentsByUser(idUser);

        setRents(rents);
      } catch (error) {
        console.log(error);
      }
    };
    loadRents(idUser);
  }, []);
  return (
    <div className="rents">
      <tr>
        <th>Movie Name</th>
        <th>Rented date</th>
        <th>Return date</th>
        <th>Prices</th>
      </tr>
      {rents.map((rent) => {
        console.log(rents, 'rentssss')
        return (
          <div className="tableRents">
            <td>
            <h3>{rent.idMovie.title}</h3>
            </td>
            <td>
            <h3>{rent.rent_date}</h3>
            </td>
            <td>
            <h3>{rent.return_date}</h3>
            </td>
            <td>
            <h3>{rent.price}</h3>
            </td>
          </div>
        );
      })}
    </div>
  );
};
export default Rents;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getRents from "../../services/getRents";
import "./Rents.css"

const Rents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = useSelector((state) => state.tokenInfo.id);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    const loadRents = async () => {
      try {
        const rents = await getRents(idUser);

        setRents(rents);
      } catch (error) {
        console.log(error);
      }
    };
    loadRents(idUser);
  }, []);
  return (
    <div className="rents">
      <h3>
        This is the rents of my profile!!!!! <br />
        {rents.map((rent) => {
          return (
            <div>
              <h3>{rent.idMovie.title}</h3>
              <h3>{rent.idMovie.price.$numberDecimal}</h3>
            </div>
          );
        })}
      </h3>
    </div>
  );
};
export default Rents;

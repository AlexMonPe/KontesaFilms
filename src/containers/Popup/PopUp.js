import { useDispatch, useSelector } from "react-redux";
import actionCreator from "../../store/actionTypes";
import { CLOSE_POPUP } from "../../store/typesVar";
import "./PopUp.css";
import {FaRegWindowClose} from "react-icons/fa"

const PopUp = () => {
    const dispatch = useDispatch()
  const popupState = useSelector((state) => state.popup);


  const closePopUp = () =>{
    dispatch(actionCreator(CLOSE_POPUP))
  }
  setTimeout(closePopUp,3000)
  return (
    <div>
        <div className="popup">
          <p>{popupState.text}</p>
        </div>
    </div>
  );
};

export default PopUp;

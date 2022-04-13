import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import { USER_LOGOUT } from "../../store/typesVar";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logged = useSelector((state) => state.logged);
  console.log(logged)

  return (
    <header>
      {!logged && (
        <div className="header">
          <div>
            <img
              className="imageLogo"
              src="./images/LogoKontesaFilms_svg.png"
              alt="logo"
            ></img>
          </div>
          <div className="box-links">
            <div className="links">
              <a
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
      {logged && (<div className="header">
          <div>
            <img
              className="imageLogo"
              src="./images/LogoKontesaFilms_svg.png"
              alt="logo"
            ></img>
          </div>
          <div className="box-links">
            <div className="links">
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  navigate("/rents/byuser");
                }}
              >
                My rents
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  dispatch(actionCreator(USER_LOGOUT));
                navegar("/login")
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>)}
    </header>
  );
};
export default Header;

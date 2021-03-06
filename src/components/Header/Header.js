import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePopup from "../../hooks/usePopup";
import actionCreator from "../../store/actionTypes";
import { IS_ADMIN, USER_LOGOUT } from "../../store/typesVar";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const popUp = usePopup();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.logged);
  const idUser = useSelector((state) => state.tokenInfo.id);
  const roleState = useSelector((state) => state.tokenInfo.role);

  if (roleState === "Admin") dispatch(actionCreator(IS_ADMIN));

  return (
    <header>
      {!logged && (
        <div className="header">
          <div>
            <img
              className="imageLogo invisible sm:visible"
              src="
              /images/LogoKontesaFilms_svg.png"
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
      {logged && roleState == "client" && (
        <div className="header">
          <div>
            <img
              className="imageLogo invisible sm:visible"
              src="/images/LogoKontesaFilms_svg.png"
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
                  navigate("/search");
                }}
              >
                MovieFilter
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  navigate("/rents/byuser/" + idUser);
                }}
              >
                My rents
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  dispatch(actionCreator(USER_LOGOUT));
                  popUp("LOG OUT SUCCESS");
                  setTimeout(() => navigate("/login"), 3500);
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
      {roleState == "Admin" && (
        <div className="header">
          <div>
            <img
              className="imageLogo"
              src="/images/LogoKontesaFilms_svg.png"
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
                  navigate("/search");
                }}
              >
                MovieFilter
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  navigate("/rents/byuser/" + idUser);
                }}
              >
                My rents
              </a>
            </div>
            <div className="links">
              <a
                onClick={() => {
                  dispatch(actionCreator(USER_LOGOUT));
                  popUp("LOG OUT SUCCESS");
                  setTimeout(() => navigate("/login"), 3500);
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;

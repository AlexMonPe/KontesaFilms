import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import usePopup from "../../hooks/usePopup";
import { apiConsumer } from "../../services/apiConsumer";
import actionCreator from "../../store/actionTypes";
import { SHOW_LOADING, TOKEN_INFO, USER_LOGGED } from "../../store/typesVar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const popUp = usePopup();
  const loading = useLoading();
  const dispatch = useDispatch();

  const loginSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };
    
      const loginUser = await apiConsumer.loginUser(loginData)

      if (loginUser) {
        dispatch(actionCreator(USER_LOGGED))
        dispatch(actionCreator(TOKEN_INFO, loginUser));
        loading()
        popUp("Welcome to Kontesa Films");
        dispatch(actionCreator(SHOW_LOADING,true))
        setTimeout(() => navigate("/"), 3000);
      } else {
        popUp("User or passoword are wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={(e) => loginSubmit(e)} className="login">
        <h2 className="p-2 text-3xl text-amber-400 underline newFont">LOGIN</h2>
        <label className="labelogin" htmlFor="email">
          Email
        </label>
        <input className="inputlogin" type="email" id="email" name="email" />
        <label className="labelogin" htmlFor="password">
          Password
        </label>
        <input
          className="inputlogin"
          type="password"
          id="password"
          name="password"
        />
        <input className="submitlogin" type="submit" value="Sign in" />
        <p className="loginRedirect">
          New to KontesaFilms? <a href="/register">Sign up now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import {
  CERRAR_POPUP,
  IS_ADMIN,
  SHOW_POPUP,
  TOKEN_INFO,
  USER_LOGGED,
  VER_POPUP,
} from "../../store/typesVar";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleState = useSelector((state) => state.tokenInfo.role);

  const loginSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      let loginUser = await fetch("https://api-restfull-movies-nodejs.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      loginUser = await loginUser.json();

      if (loginUser) {
        dispatch(actionCreator(TOKEN_INFO, loginUser));
        // console.log(roleState, 'rolestateeeeeeeee despues de token info')
        // if (roleState === "Admin") {
        //   dispatch(actionCreator(IS_ADMIN));
        //   console.log('es admin!!!')
        //   navigate("/dashboard")
        // } else {
          dispatch(actionCreator(USER_LOGGED));
          dispatch(actionCreator(SHOW_POPUP, "Welcome to Kontesa Films"))
          setTimeout(()=> navigate("/"),4000);
        //}

        // dispatch(actionCreator(USER_LOGGED));
        // dispatch(
        //   actionCreator(VER_POPUP, "Te has logeado correctamente. Bienvenido")
        // );
        //setTimeout(() => dispatch(actionCreator(CERRAR_POPUP)), 3000);
        //navigate("/areaCliente");
      } else {
        alert("Usuario y/o contraseña incorrecto.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={(e) => loginSubmit(e)} className="login">
      <h2 className="p-2 text-3xl text-amber-400 underline">LOGIN</h2>
        <label className="labelogin" htmlFor="email">Email</label>
        <input className="inputlogin" type="email" id="email" name="email" />
        <label className="labelogin" htmlFor="password">Password</label>
        <input className="inputlogin" type="password" id="password" name="password" />
        <input className="submitlogin" type="submit" value="Sign in" />
        <p className="loginRedirect">New to KontesaFilms? <a href="/register">Sign up now</a></p>
      </form>
    </div>
  );
};

export default Login;

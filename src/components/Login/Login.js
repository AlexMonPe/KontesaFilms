import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import {
  CERRAR_POPUP,
  TOKEN_INFO,
  USER_LOGGED,
  VER_POPUP,
} from "../../store/typesVar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleState = useSelector((state) => state.tokenInfo.role)

  const loginSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      let loginUser = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      loginUser = await loginUser.json();

      if (loginUser) {
        dispatch(actionCreator(TOKEN_INFO, loginUser));
        
        if(roleState == "admin"){
          console.log('role admiiiiiin') // actions for admins like redirect to dashboard
        }else{
          dispatch(actionCreator(USER_LOGGED))
          console.log('user logged cambiado a true')
        }

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
    <div className="bg-black h-96">
      <h2>LOGIN</h2>
      <form onSubmit={(e) => loginSubmit(e)} className="formUsuario">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerSubmit = async (e) => {
      // Make the submit dont refresh the page
      e.preventDefault();
      try {
        const formData = {
          name: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        };
  
        const createUser = await fetch(
          "http://localhost:4000/users/register",
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const userCreated = await createUser.json();
  
        if (userCreated) {
            console.log('usuario creado redireccion', userCreated)
        //   dispatch(actionCreator(VER_POPUP, "Usuario creado. Bienvenido"));
        //   setTimeout(() => dispatch(actionCreator(CERRAR_POPUP)), 3000);
        navigate("/login");
        }
      } catch (error) {
        alert("no se ha cargado la bd " + error);
      }
    };
  
    return (
      <div className="crearUsuario">
        <h2 className="h2registro">USER REGISTER</h2>
        <form onSubmit={(e) => registerSubmit(e)} className="formCrearUsuario">
          <label className="labelCrearUsuario" htmlFor="name">
            Name
          </label>
          <input
            className="inputCrearUsuario"
            type="text"
            id="name"
            name="name"
          />
          <label className="labelCrearUsuario" htmlFor="email">
            Email
          </label>
          <input
            className="inputCrearUsuario"
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
          />
          <label className="labelCrearUsuario" htmlFor="password">
            Password
          </label>
          <input
            className="inputCrearUsuario"
            type="password"
            id="password"
            name="password"
          />
          <input
          className="botonCrearUsuario"
          type="submit"
          value="Register"
        />
        </form>
      </div>
    );
  };
  
  export default Register;
  
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionCreator from "../../store/actionTypes";
import { SHOW_POPUP } from "../../store/typesVar";
import "./Register.css";

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

      const createUser = await fetch("https://api-restfull-movies-nodejs.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userCreated = await createUser.json();

      if (userCreated) {
        dispatch(actionCreator(SHOW_POPUP, "Register is done! Thank you!"));
        setTimeout(() => navigate("/login"), 3500);
      }
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={(e) => registerSubmit(e)} className="createUser">
        <h2 className="h2User">SIGN UP</h2>
        <label className="labelUser" htmlFor="name">
          Name
        </label>
        <input className="inputUser" type="text" id="name" name="name" />
        <label className="labelUser" htmlFor="email">
          Email
        </label>
        <input
          className="inputUser"
          type="email"
          id="email"
          name="email"
          placeholder="example@domain.com"
        />
        <label className="labelUser" htmlFor="password">
          Password
        </label>
        <input
          className="inputUser"
          type="password"
          id="password"
          name="password"
        />
        <input className="buttonUser" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePopup from "../../hooks/usePopup";
import { apiConsumer } from "../../services/apiConsumer";
import "./Register.css";

const Register = () => {
  const popUp = usePopup();
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
      const userCreated = await apiConsumer.createUser(formData)
     
      if (userCreated) {
        popUp("Register successfully");
        setTimeout(() => navigate("/login"), 3500);
      }
    } catch (error) {
      popUp("no se ha cargado la bd " + error);
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

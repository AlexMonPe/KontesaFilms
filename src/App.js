import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register";
import Rents from "./components/Rents/Rents";
import Header from "./components/Header/Header";
import Footer from "./containers/Footer/Footer";
import Home from "./components/Home/Home";
import Detail from "./containers/Detail/Detail";
import { useSelector } from "react-redux";

function App() {
  const logged = useSelector((state) => state.logged)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/rents/byuser/" element={<Rents />}></Route>
          <Route path="/allrents" element=""></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

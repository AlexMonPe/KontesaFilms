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
import { ErrorComponent } from "./components/Error/Error";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  const logged = useSelector((state) => state.logged);
  return (
    <div className="App">
      <ErrorComponent>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/rents/byuser/:id" element={<Rents />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorComponent>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register";
import Rents from "./components/Rents/Rents";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element=""></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/rents/byuser/" element={<Rents />}></Route>
          <Route path="/allrents" element=""></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

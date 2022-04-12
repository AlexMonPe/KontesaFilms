import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/rents/:id" element=""></Route>
        <Route path="/allrents" element=""></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;

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
import Search from "./components/Search/Search";
import PopUp from "./containers/Popup/PopUp";
import Loading from "./containers/Loading/Loading";

function App() {
  const popupState = useSelector((state) => state.popup); 
  const admin = useSelector(state => state.admin)
  const loading = useSelector(state => state.loading)
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
            {admin && <Route path="/dashboard" element={<Dashboard />}></Route>}
            <Route path="/search" element={<Search />}></Route>
          </Routes>
          <Footer />
          {loading && <Loading />}          
          {popupState.visible && <PopUp />}
        </BrowserRouter>
      </ErrorComponent>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Header from "../Header";
import Login from '../Login'
import Private from "../private";


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        {/* rutas privadas*/}
        <Route element={<Private/>}>
        <Route path="/contacto" element={<Contacto/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

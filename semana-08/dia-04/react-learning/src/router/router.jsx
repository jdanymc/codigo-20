// para poder crear nuestras rutas debemos importar lo sgte:
// BrowserRouter: va envolver todas las rutas que creamos
//Routes: hijos esto nos permiten crear rutas hijos
// Route es el encargadp de recibir el path y el elemento y renderiza el elemento como ruta

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import AppEjemplo from "../pages/AppEjemplo";
import Header from "../components/Header";

const Router = () => {
  //como este es un componente tenemos que usar el return para poder crear las rutas
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AppEjemplo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

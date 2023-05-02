import React, { useContext, useEffect } from "react";
import Products from "../products";
import Cart from "../cart";
import { UserContext } from "../context/ContextCarrito";

const Home = () => {
  //1. se usa el custom hook useCarrito para obtener las funciones de las variables
  const { agregarAlCarrito, carrito, eliminarDelCarrito } =
    useContext(UserContext);

  //2. este useefect se usa para guardar en el localstorage
  // el useeffect se actualiza cada ves que se actualiza el estado del carrito

  useEffect(() => {
    // el primer valor del localstorage setitem es el nombre de la variabel que se quiere guardar
    localStorage.setItem("carrito", JSON.stringify(carrito)); // se usa el metodo setitem para guardar el carrito en el localstorage
  }, [carrito]);

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-2">Filtrador </div>
        <div className="col-md-7">
          <Products agregarAlCarrito={agregarAlCarrito} />
        </div>
        <div className="col-md-3">
          <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
      </div>
    </div>
  );
};

export default Home;

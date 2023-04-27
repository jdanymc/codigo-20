import { useState, useEffect } from "react";
import Cart from "./components/cart";
import Products from "./components/products";

const App = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const agregarAlCarrito = (item) => {
    const copiaCarrito = [...carrito];
    const itemEncontrado = copiaCarrito.find((prod) => prod.id === item.id);
    if (itemEncontrado) {
      itemEncontrado.cant++;
      setCarrito(copiaCarrito);
    } else {
      setCarrito([...copiaCarrito, { ...item, cant: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    const copiaCarrito = [...carrito];
    const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== id);
    setCarrito(nuevosProductos);
  };

  const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  useEffect(() => {
    guardarCarrito();
  }, [carrito]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">FILTRADOR</div>
        <div className="col-md-7">
          <Products agregarAlCarrito={agregarAlCarrito} />
        </div>
        <div className="col-md-2">
          <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
      </div>
    </div>
  );
};

export default App;

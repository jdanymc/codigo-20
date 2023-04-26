import { useState } from "react";
import Cart from "./components/cart";
import Products from "./components/products";

const App = () => {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (item) => {
    //console.log("agregando al carrito");
    setCarrito([...carrito,item]);
    console.log(carrito);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">FILTRADOR</div>
        <div className="col-md-7">
          <Products agregarAlCarrito={agregarAlCarrito} />
        </div>
        <div className="col-md-2">
          <Cart carrito={carrito} />
        </div>
      </div>
    </div>
  );
};

export default App;

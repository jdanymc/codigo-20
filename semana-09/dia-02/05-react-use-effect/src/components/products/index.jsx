import axios from "axios";
import { URL_API_STORE } from "../../constants";
import { useState, useEffect, useContext } from "react";
import Product from "../product";
import PropTypes from "prop-types";
import { UserContext } from "../context/ContextCarrito";

const Products = () => {
  const { agregarAlCarrito } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      `${URL_API_STORE}/products?limit=${limit}`
    );
    setProductos(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [limit]);

  return (
    <>
      <div className="row">
        {loading ? (
          <div className="col-md-12 text-center">Cargando...</div>
        ) : (
          productos.map((prod) => (
            <div className="col-md-3 mb-3" key={prod.id}>
              <Product item={prod} agregarAlCarrito={agregarAlCarrito}/>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => setLimit(limit + 5)}
            disabled={loading}
          >
            Cargar más
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;

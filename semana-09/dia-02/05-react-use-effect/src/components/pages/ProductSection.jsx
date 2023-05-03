import axios from "axios";
import { URL_API_STORE } from "../../constants";
import { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { UserContext } from "../context/ContextCarrito";
import Cart from "../cart";

const ProductSection = () => {
  const {id} = useParams(); //se usa para obtener el parametro de la URL
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(UserContext);
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`${URL_API_STORE}/products/${id}`);
      // se actualiza el estado de la variable con la respuesta del api
      setProducto(response.data);
      // se actualiza el estado loading a false para indicar que ya se termino de argar los productos
      setLoading(false);
    };
    // se invoca a la funcion
    getProduct();
  }, [id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg my-5">
        <NavLink to={"/"}>
          <button>back</button>
        </NavLink>
        {loading ? (
          <div>cargando</div> // si loagin is true se muestra el mensaj de cargando
        ) : (
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-5">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={producto.image}
                alt="..."
              />
            </div>
            <div className="col-md-3">
              <div className="small mb-1">
                {producto.category}
              </div>
                <h1>{producto.title}</h1>
                <div className="fs-5 mb-5">
                  <span>${producto.price}</span>
                </div>
                <p className="lead">
                  {producto.description}
                </p>
                <form className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                style={{ maxWidth: "4rem" }}
              />
              <button onClick={() => {
                agregarAlCarrito(producto,cantidad) //Se llama a la funcion agregarAlCarrito que esta en el componente principal
            }} className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>
                Agregar al carro
              </button>
            </form>
            </div>
            <div className="col-md-4">
              <Cart />
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;

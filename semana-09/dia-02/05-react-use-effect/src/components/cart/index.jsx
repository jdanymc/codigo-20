import PropTypes from "prop-types";
import "./styles.css";

const Cart = (props) => {
  const { carrito,eliminarDelCarrito } = props;
  return (
    <ul className="list-group">
      {carrito.map((prod) => (
        <li
          className="list-group-item d-flex cart-item align-items-center"
          key={prod.id}
        >
          <img src={prod.image} alt="" className="cart-item-img" />
          <div>
            <p className="mb-0">
              <strong>{prod.title}</strong>
            </p>
            <div className="d-flex justify-content-between">
              <p>{prod.cant}</p>
              <p className="pe-3">{(prod.cant * prod.price).toFixed(2)}</p>
              <button className="btn btn-outline-danger" onClick={()=> eliminarDelCarrito(prod.id)} ><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

Cart.propTypes = {
  carrito: PropTypes.arrayOf(PropTypes.object),
  eliminarDelCarrito: PropTypes.func.isRequired
};
export default Cart;

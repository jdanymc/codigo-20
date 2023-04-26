import Product from "../product";
import PropTypes from "prop-types";

const Cart = (props) => {
    const { carrito } = props;
  return (
    <div className="row">
   {
      carrito.map((prod) => (
        <div className="col-md-12 mb-3" key={prod.id}>
          <Product item={prod} />
        </div>
      ))
    }
  </div>
  )
}

Cart.propType={
    carrito: PropTypes.array.isRequired,
}
export default Cart
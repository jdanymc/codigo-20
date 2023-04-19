import Producto from "./Producto";
import { productos_list } from "./productos_list";

function Productos() {
  const productos = productos_list.map((producto) => {
    return (
      <Producto
        key={producto.id}
        title={producto.title}
        image={producto.image}
        description={producto.description}
        price={producto.price}
      />
    );
  });

  return (
    <main className="d-flex justify-content-center">
      <div className="row">{productos}</div>
    </main>
  );
}
export default Productos;

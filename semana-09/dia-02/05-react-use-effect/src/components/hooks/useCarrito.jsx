import { useState } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState(
    // 1. valida ai hay algun producto en el carrito de lo contrario establece el valor de carrito e nun arrar vacio
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const agregarAlCarrito = (item, cantidad = 1) => {
    //se desestructura la variable carrito para obtener sus valores
    const copiaCarrito = [...carrito];
    const itemEncontrado = copiaCarrito.find((prod) => prod.id === item.id);
    if (itemEncontrado) {
      itemEncontrado.cant += +cantidad;
      setCarrito(copiaCarrito);
    } else {
      // si el item no existe se agrega al carrito
      const nuevoItemAlCarrito = {...item}; //se usa el operaador para sacar una copia
      nuevoItemAlCarrito.cant = +cantidad; // sele agrega a la propiedad cant el obeto nuevoitemcarrito el valor de 1
      copiaCarrito.push(nuevoItemAlCarrito); //se agrega el objeto nuevoItemCarrito usando push
      setCarrito(copiaCarrito);
    }
  };
  // esta funcion eliminara el item
  const eliminarDelCarrito = (id) => {
    const copiaCarrito = [...carrito];
    const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== id);
    setCarrito(nuevosProductos); // actualizar lista del carrito
  };
  return {agregarAlCarrito, carrito, eliminarDelCarrito};
};

export default useCarrito;

import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";
export const UserContext = createContext();

const ContextCarrito = (children) => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useCarrito();
  return (
    <UserContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}
    >
      {children}
    </UserContext.Provider>
  );
};

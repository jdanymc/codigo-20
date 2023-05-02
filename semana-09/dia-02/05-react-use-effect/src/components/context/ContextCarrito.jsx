import { createContext } from "react";
import useCarrito from "../hooks/useCarrito";
export const UserContext = createContext();

//se crea un contexto para poder usar las funciones y variables del custom hooks useCarrito en todos los
//componentes que esten dentro del componente contextCarrito
export const ContextCarrito = ({ children }) => {
  // se desestructura el custom hook para obtener las funciones y variables
  const { agregarAlCarrito, carrito, eliminarDelCarrito } = useCarrito();
  return (
    // se crea un contexto y un userContext que va contener las funciones que se van a usar
    <UserContext.Provider
      value={{ agregarAlCarrito, carrito, eliminarDelCarrito }}
    >
      {children}
    </UserContext.Provider>
  );
};

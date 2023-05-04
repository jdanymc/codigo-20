import { createContext, useState } from "react";
import { platos, mesas, categorias } from "../../data/fakeData";
export const PageContext = createContext();

export const ContextData = ({ children }) => {
  const [mesaSeleccionada,setMesaSeleccionada] = useState(undefined);
  //console.log(platos);
  return (
    // se crea un contexto y un userContext que va contener las funciones que se van a usar
    <PageContext.Provider
      value={{ platos, mesas, categorias, mesaSeleccionada, setMesaSeleccionada }}
    >
      {children}
    </PageContext.Provider>
  );
};

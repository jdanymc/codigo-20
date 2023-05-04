import { createContext, useState } from "react";
import { platos, mesas, categorias } from "../../data/fakeData";
export const PageContext = createContext();

export const ContextData = ({ children }) => {
  const [mesaSel,setMesaSel] = useState(1);
  const [categoriaSel,setCategoriaSel] = useState(1);
  //console.log(platos);
  return (
    // se crea un contexto y un userContext que va contener las funciones que se van a usar
    <PageContext.Provider
      value={{ platos, mesas, categorias, mesaSel,setMesaSel,categoriaSel,setCategoriaSel }}
    >
      {children}
    </PageContext.Provider>
  );
};

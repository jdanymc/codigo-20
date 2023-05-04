import { useContext } from "react";
import { PageContext } from "../context/data";
const Mesas = () => {
  const { mesas, mesaSel } = useContext(PageContext);
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        {mesas.map((mesa) => (
          <li className={`mesas__mesa ${mesa.id===mesaSel?'activo':''}`} key={mesa.id}>
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">{mesa.nro}</span>
          </li>
        ))}
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default Mesas;

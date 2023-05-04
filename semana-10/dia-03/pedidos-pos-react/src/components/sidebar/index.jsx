import { useContext } from "react";
import { PageContext } from "../context/data";

const Sidebar = () => {
  const { categorias, categoriaSel } = useContext(PageContext);

  return (
    <nav className="menu">
      <ul className="menu__lista">
        {categorias.map((cat) => (
          <li className={`${cat.id===categoriaSel?'active':''}`} key={cat.id}>
            <img src="../img/plato_blanco.svg" alt="" />
            <span>{cat.nombre}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

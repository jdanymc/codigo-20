import { useContext } from "react"
import { PageContext } from "../context/data"


const Sidebar = () => {

const {data} = useContext(PageContext)
console.log('data ',data);
  return (
    <nav className="menu">
    <ul className="menu__lista">
      <li className="active">
        <img src="./img/plato_blanco.svg" alt="" />
        <span>Bebidas</span>
      </li>
      <li>
        <img src="./img/plato_blanco.svg" alt="" />
        <span>Bebidas</span>
      </li>
      <li>
        <img src="./img/plato_blanco.svg" alt="" />
        <span>Bebidas</span>
      </li>
      <li>
        <img src="./img/plato_blanco.svg" alt="" />
        <span>Bebidas</span>
      </li>
    </ul>
  </nav>
  )
}

export default Sidebar
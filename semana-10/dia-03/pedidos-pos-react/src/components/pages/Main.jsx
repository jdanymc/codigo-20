import Header from "../header"
import Mesas from "../mesas"
import Sidebar from "../sidebar"

const Main = () => {
  return (
    
    <>
      <Header />
  <main className="pos-container">
    <Sidebar/>
    <section className="tabla">
    <Mesas/>
      <div className="pedido">
        <div className="carta">
          <h3>Lista de Platos Categoria: &nbsp; <span className="color-secundario">BEBIDAS</span></h3>

          <div className="carta__platos">
            <div className="carta__plato">
              <img
                src="https://static.wixstatic.com/media/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.png/v1/fill/w_275,h_183,al_c,lg_1,q_90/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.webp"
                alt="" />
              <h4 className="carta__titulo">Arroz Chaufa de Pollo</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
            <div className="carta__plato">
              <img src="https://www.vippng.com/png/full/256-2565352_ceviche-fried-onion.png" alt="" />
              <h4 className="carta__titulo">Cebiche</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
            <div className="carta__plato">
              <img
                src="https://afar-production.imgix.net/uploads/images/post_images/images/JAdrKK7VYE/original_f336532b5fa4444f5337506aad5b13f5.png?1462882355?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954"
                alt="" />
              <h4 className="carta__titulo">Pulpo al Olivo</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
            <div className="carta__plato">
              <img
                src="https://static.wixstatic.com/media/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.png/v1/fill/w_275,h_183,al_c,lg_1,q_90/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.webp"
                alt="" />
              <h4 className="carta__titulo">Arroz Chaufa de Pollo</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
            <div className="carta__plato">
              <img
                src="https://static.wixstatic.com/media/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.png/v1/fill/w_275,h_183,al_c,lg_1,q_90/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.webp"
                alt="" />
              <h4 className="carta__titulo">Arroz Chaufa de Pollo</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
            <div className="carta__plato">
              <img
                src="https://static.wixstatic.com/media/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.png/v1/fill/w_275,h_183,al_c,lg_1,q_90/b3bc8c_e55132dac2f94941b8d0deeb56e04838~mv2.webp"
                alt="" />
              <h4 className="carta__titulo">Arroz Chaufa de Pollo</h4>
              <span className="carta__precio">S/ 52.00</span>
              <div className="carta__botones">
                <button className="boton boton-outline-primary boton-restar">
                  -1
                </button>
                <button className="boton boton-outline-primary boton-sumar">
                  +1
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="boleta">
          <h3>Pedido Mesa: &nbsp;<span className="color-secundario">01</span></h3>
          <hr />
          <div className="comanda">
            <h4 className="comanda__mesa">Mesa 01</h4>
            <p className="comanda__usuario">Carlos Jimenez</p>
            <hr />

            <ul className="comanda__lista">
              <li className="comanda__item">
                <p className="comanda__nombre">
                  <span><strong>Arroz Chaufa de Pollo</strong></span>
                  <span>Precio: S/ 35.00</span>
                </p>
                <p className="comanda__cantidad">01</p>
                <p className="comanda__precio">
                  <strong>S/ 35.00</strong>
                </p>
              </li>
              <li className="comanda__item">
                <p className="comanda__nombre">
                  <span><strong>Lomo Saltado</strong></span>
                  <span>Precio: S/ 35.00</span>
                </p>
                <p className="comanda__cantidad">01</p>
                <p className="comanda__precio">
                  <strong>S/ 35.00</strong>
                </p>
              </li>
              <li className="comanda__item">
                <p className="comanda__nombre">
                  <span><strong>Café expreso</strong></span>
                  <span>Precio: S/ 5.00</span>
                </p>
                <p className="comanda__cantidad">01</p>
                <p className="comanda__precio">
                  <strong>S/ 5.00</strong>
                </p>
              </li>
              <li className="comanda__item">
                <p className="comanda__nombre">
                  <span><strong>Porc. Torta Helada</strong></span>
                  <span>Precio: S/ 8.00</span>
                </p>
                <p className="comanda__cantidad">01</p>
                <p className="comanda__precio">
                  <strong>S/ 8.00</strong>
                </p>
              </li>
            </ul>
            <button className="boton boton-success boton-block">PAGAR</button>
          </div>
        </div>
      </div>
    </section>
  </main>
    
    </>
  )
}

export default Main
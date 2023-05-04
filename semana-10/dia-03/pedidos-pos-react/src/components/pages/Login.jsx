import { NavLink } from "react-router-dom";
import "../../css/login.css";

const Login = () => {
  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            className="formulario__input"
            placeholder="Email"
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
          />
          <NavLink to={`/main`}>
            <button className="formulario__submit" type="submit">
              Iniciar Sesión
            </button>
          </NavLink>
        </form>
      </div>
    </main>
  );
};

export default Login;

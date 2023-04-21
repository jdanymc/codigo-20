import { useState } from "react";

function AppEjemplo() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Usuarios</h1>
        <div className="grid">
          <input
            type="text"
            placeholder="Ingrese el nombre de usuario"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                fetchUser();
              }
            }}
          />
        </div>
        <div>
          <button onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container">
            <img src={user.avatar_url} alt="avatar" width={200} />
            <h4>{user.name}</h4>
            <h3>{user.login}</h3>
            <p>{user.bio}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AppEjemplo;

import Productos from "./Productos";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Productos />
      </div>
    </div>
  );
}

export default App;

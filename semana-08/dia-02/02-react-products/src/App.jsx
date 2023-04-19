import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Productos from "./Productos";
import Header from "./Header";

function App() {
  return <div className="container">
    <Header/>
    <Productos/>
  </div>;
}

export default App;

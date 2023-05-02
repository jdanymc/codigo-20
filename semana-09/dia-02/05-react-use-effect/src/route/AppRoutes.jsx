import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

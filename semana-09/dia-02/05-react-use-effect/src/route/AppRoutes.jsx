import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "../App";
import Home from "../components/pages/Home";
import ProductSection from "../components/pages/ProductSection";
import Header from "../components/header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductSection/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

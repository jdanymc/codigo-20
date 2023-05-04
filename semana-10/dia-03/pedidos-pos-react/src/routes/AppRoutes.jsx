import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../components/pages/Login'
import Main from '../components/pages/Main'
const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/main" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    );
  };

export default AppRoutes
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/products";
import { Route, Routes } from "react-router";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
      </Routes>
    </div>
  );
}

export default App;

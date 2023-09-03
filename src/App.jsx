import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/products";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;

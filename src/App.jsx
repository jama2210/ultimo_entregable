import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductInfo from "./pages/ProductInfo";
import { getAllProducts } from "./store/slices/products.slice";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
import Footer from "./components/shared/Footer";
import Purchases from "./pages/Purchases";
import ProtectedRoutes from "./components/shared/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    //dispatch(getUserCart());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        {/* Rutas Protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

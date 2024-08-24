import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index.jsx";
import Cart from "./pages/cart-page";

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-page" element={<Cart />} />
      </Routes>
    </div>
  );
}

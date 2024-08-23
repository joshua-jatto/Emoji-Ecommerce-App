import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart-page";
import {ShopProvider} from "./context/shop-Context";

export default function App() {

  return (
    <div>
      <ShopProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/cart-page" element={<Cart />}></Route>
        </Routes>
      </ShopProvider>
    </div>
  );
}

import React from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/CartContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Todos nuestros productos"} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting={"Productos por categoría"} />
              }
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h1>404 - No aparece la página</h1>} /> */
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

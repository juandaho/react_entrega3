import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItemsData = [];
      for (const item of cart) {
        const itemDoc = await getDoc(doc(db, "products", item.id));
        const itemData = itemDoc.data();
        cartItemsData.push({ ...itemData, cartItemId: item.id, quantity: item.quantity });
      }
      setCartItems(cartItemsData);
    };
  
    fetchCartItems();
  }, [cart]);
  

  const getTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Carrito vacío</h2>
        <Link to="/" className="option-link">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total ${getTotal()}</h3>
        <button onClick={clearCart} className="cart-button">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="option-link">
          Checkout
        </Link>
      </div>
    </div>
  );
};

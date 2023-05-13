import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  if (cart.length === 0) {
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
        {cart.map((item) => (
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


import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "./CartContext";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <button onClick={handleRemove}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;

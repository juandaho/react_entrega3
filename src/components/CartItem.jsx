import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ cartItemId, name, price, quantity }) => {
  const removeItem = useCartRemoveItem();

  const handleRemove = () => {
    removeItem(cartItemId);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <h4 className="cart-item-title">{name}</h4> {/* Agregado clase para estilos */}
        <p className="cart-item-price">Precio: ${price}</p> {/* Agregado clase para estilos */}
        <p className="cart-item-quantity">Cantidad: {quantity}</p> {/* Agregado clase para estilos */}
        <button className="cart-item-remove" onClick={handleRemove}>Eliminar</button> {/* Agregado clase para estilos */}
      </div>
    </div>
  );
};

const useCartRemoveItem = () => {
  const cart = useContext(CartContext);
  const removeItem = (id) => {
    cart.removeItem(id);
  };

  return removeItem;
};

export default CartItem;

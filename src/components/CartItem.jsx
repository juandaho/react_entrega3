import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "./CartContext";
import { ReactComponent as DeleteIcon } from "./delete.svg";

const CartItem = ({ cartItemId, name, price, quantity }) => {
  const removeItem = useCartRemoveItem();

  const handleRemove = () => {
    removeItem(cartItemId);
  };

  return (
    <div className="cart-item" key={cartItemId}>
      <div className="cart-item-content">
        <h4 className="cart-item-title">{name}</h4>
        <p className="cart-item-price">Precio: ${price}</p>
        <p className="cart-item-quantity">Cantidad: {quantity}</p>
        <button className="cart-item-remove" onClick={handleRemove}>
          <DeleteIcon />
        </button>
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

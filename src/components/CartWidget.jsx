import React, { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "./cart.svg";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="cartWidget">
      <CartIcon className="cartImg" alt="cart-widget" />
      {totalQuantity > 0 && <span className="cartQuantity">{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;
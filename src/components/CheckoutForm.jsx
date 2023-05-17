import React, { useState } from "react";
import "./Checkout.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = { name, phone, email };
    onConfirm(userData);
  };

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-form-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleConfirm}>
        <label htmlFor="name" className="checkout-form-label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="checkout-form-input"
        />
        <label htmlFor="phone" className="checkout-form-label">
          Telefono
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="checkout-form-input"
        />
        <label htmlFor="email" className="checkout-form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="checkout-form-input"
        />
        <button type="submit" className="checkout-form-button">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

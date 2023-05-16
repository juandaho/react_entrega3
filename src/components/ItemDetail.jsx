import React from "react";
import { ItemCount } from "./ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./CartContext";

export const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = React.useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <div className="ImageContainer">
        <img src={img} alt={name} className="ItemImg" />
      </div>
      <section>
        <p className="Info">Categoría: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
  {quantityAdded > 0 ? (
    <div className="centerOption">
      <Link to="/cart" className="Option">
        Terminar Compra
      </Link>
    </div>
  ) : (
    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
  )}
</footer>
    </article>
  );
};

export default ItemDetail;

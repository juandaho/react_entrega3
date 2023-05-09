import React from "react";
import { ItemCount } from "./ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = (
  {id,
  name,
  img,
  category,
  description,
  price,
  stock}
) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img}  alt="img" className="ItemImg" />
      </picture>

      <section>
        <p className="Info">Categoría: {category}</p>

        <p className="Info">Precio: ${price}</p>
      </section>

      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad Agtreagada: ", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const Item = ({ id, name, img, price, stock }) => {
  const [itemData, setItemData] = useState(null);

  const handleItemClick = async () => {
    try {
      const itemDocRef = doc(db, 'items', id);
      const itemSnapshot = await getDoc(itemDocRef);
      if (itemSnapshot.exists()) {
        const itemData = itemSnapshot.data();
        setItemData(itemData);
      } else {
        console.log('El item no existe');
      }
    } catch (error) {
      console.log('Error al obtener el item:', error);
    }
  };

  return (
    <article className="CartItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>

      <picture>
        <img className="ItemImg" src={img} alt={name} />
      </picture>

      <section>
        <p className="Info">Precio: {price}</p>
        <p className="Info">Stock Disponible: {stock}</p>
      </section>

      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option" onClick={handleItemClick}>
          Ver Detalle
        </Link>
      </footer>

      {itemData && (
        <div className="ItemDetail">
          <h3>Detalles del item:</h3>
          <p>Nombre: {itemData.name}</p>
          <p>Descripción: {itemData.description}</p>
          <p>Otros detalles: {itemData.otherDetails}</p>
          {/* Mostrar más detalles según la estructura de datos de tu item */}
        </div>
      )}
    </article>
  );
};

export default Item;

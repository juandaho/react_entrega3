import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          const productAdapted = { id: doc.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

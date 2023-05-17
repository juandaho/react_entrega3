import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";

const useLoadProduct = (itemId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();

          console.log("Producto obtenido:", data);
          const productAdapted = {
            id: doc.id,
            category: data.category,
            categoryId: data.categoryId,
            description: data.description,
            name: data.name,
            price: data.price,
            stock: data.stock,
            img: data.img,
          };
          setProduct(productAdapted);
        } else {
          throw new Error("No item found");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return { product, loading, error };
};

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { product, loading, error } = useLoadProduct(itemId);

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;

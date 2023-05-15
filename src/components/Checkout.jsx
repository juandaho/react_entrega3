import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDoc, doc, writeBatch, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCartContext } from './CartContext';
import CheckoutForm from './CheckoutForm';

import './Checkout.css';

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useCartContext();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: { name, phone, email },
        items: cart,
        date: Timestamp.fromDate(new Date()),
        total: total,
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, 'products');

      const productsAddedFromFirebase = await Promise.all(
        ids.map((id) => getDoc(doc(productsRef, id)))
      );

      productsAddedFromFirebase.forEach((doc, index) => {
        if (doc.data().stock >= cart[index].quantity) {
          batch.update(doc.ref, { stock: doc.data().stock - cart[index].quantity });
        } else {
          outOfStock.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
      } else {
        console.log('No hay stock de los siguientes productos: ', outOfStock);
      }

      const docRef = await addDoc(collection(db, 'orders'), objOrder);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Se está generando su orden</div>;
  }

  if (orderId) {
    return (
      <div className="checkout">
        <h2>Gracias por su compra!</h2>
        <p>Su número de orden es: {orderId}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

import React, { useContext, useState } from 'react';
import { writeBatch, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { CartContext } from './CartContext';
import { CheckoutForm } from './CheckoutForm';

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const orderData = {
        buyer: { name, phone, email },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      // Aquí puedes realizar la operación de guardar la orden en la base de datos
      // Utiliza las funciones de Firebase Firestore para ello, como addDoc o setDoc
      // Puedes crear una nueva colección "orders" y guardar la información allí

      // Ejemplo:
      // const orderRef = await addDoc(collection(db, 'orders'), orderData);
      // const orderId = orderRef.id;
      // setOrderId(orderId);

      // Luego, puedes limpiar el carrito
      // clearCart();

      // Finalmente, puedes redirigir a una página de confirmación de la orden
      // Puedes utilizar react-router-dom para manejar las rutas y redireccionar

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está cargando su orden...</h1>;
  }

  if (orderId) {
    return <h1>Ya se generó su orden con el ID: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

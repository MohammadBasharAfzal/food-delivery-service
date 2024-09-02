// src/pages/CartPage.js
import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useCart();

  useEffect(() => {
    console.log('CartPage - cartItems:', cartItems);
  }, [cartItems]);

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {safeCartItems.length > 0 ? (
          safeCartItems.map((item) => (
            <li key={item.menu_id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default CartPage;

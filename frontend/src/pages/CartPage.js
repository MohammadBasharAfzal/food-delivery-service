import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the CartContext hook

const CartPage = () => {
  const { cartItems } = useCart(); // Get cart items from CartContext

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
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

// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('CartProvider mounted');
    return () => {
      console.log('CartProvider unmounted');
    };
  }, []);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const updatedCart = [...prevItems, item];
      console.log('Cart Items after adding:', updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

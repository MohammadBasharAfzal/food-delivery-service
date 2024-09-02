// src/pages/MenuPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const fetchMenuItems = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/menu');
    console.log('API Response:', response.data);
    return response.data.menuItems;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        console.log('Fetched menu items:', items);
        setMenuItems(items);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    getMenuItems();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log('Added to cart:', item);
  };

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <li key={item.menu_id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default MenuPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { addToCart } from '../services/cartService'; // Import the cart service

// Fetch menu items using Axios
const fetchMenuItems = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/menu');
    console.log('API Response:', response.data); // Log the API response
    return response;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    const getMenuItems = async () => {
      try {
        const response = await fetchMenuItems();
        console.log('Fetched menu items:', response.data.menuItems); // Log the fetched items
        setMenuItems(response.data.menuItems); // Set state with the correct data
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    getMenuItems();
  }, []);

  // Function to add items to the cart
  const handleAddToCart = (item) => {
    addToCart(item); // Call the cart service function
    console.log('Added to cart:', item); // Log item added to cart
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

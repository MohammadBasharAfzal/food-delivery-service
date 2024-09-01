import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Tracking</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order {order.id} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderTracking;

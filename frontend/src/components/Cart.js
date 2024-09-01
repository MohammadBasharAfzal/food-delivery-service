import React, { useState } from 'react';

const Cart = ({ cartItems, onRemoveItem }) => {
  const [total, setTotal] = useState(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const handleRemove = (id) => {
    onRemoveItem(id);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;

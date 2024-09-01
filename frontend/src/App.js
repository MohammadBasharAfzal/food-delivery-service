// Path: frontend/src/App.js

import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderTracking from './pages/OrderTracking';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Create a context for authentication
export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

const CART_KEY = 'cartItems';

export const getCartItems = () => {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  return cart;
};

export const addToCart = (item) => {
  const cart = getCartItems();
  cart.push(item);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart'); 
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Erro lendo cart do localStorage:', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Erro salvando cart no localStorage:', e);
    }
  }, [cart]);

  function addToCart(item) {
    setCart(prev => [...prev, item]);
    console.log('addToCart:', item);
  }

  function removeFromCartByIndex(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCartByIndex, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

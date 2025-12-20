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
    setCart(prev => {
      const index = prev.findIndex(i => i.id === item.id);

      if (index !== -1) {
        const newCart = [...prev];
        newCart[index].quantidade += 1;
        return newCart;
      }

      return [...prev, { ...item, quantidade: 1 }];
    });
  }

  function increaseQuantity(index) {
    setCart(prev => {
      const newCart = [...prev];
      newCart[index].quantidade += 1;
      return newCart;
    });
  }

  function decreaseQuantity(index) {
    setCart(prev => {
      const newCart = [...prev];

      if (newCart[index].quantidade > 1) {
        newCart[index].quantidade -= 1;
      } else {
        newCart.splice(index, 1);
      }

      return newCart;
    });
  }

  function removeFromCartByIndex(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCartByIndex,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

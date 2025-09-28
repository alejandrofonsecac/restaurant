import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Hook Customizado
export function useCart() {
    return useContext(CartContext);
}

// Componente Provedor (CartProvider)
export default function CartProvider({children}){

    // 💡 1. LEITURA INICIAL DO LOCAL STORAGE:
    // O estado é inicializado lendo o localStorage. Se não houver nada, ele usa um array vazio.
    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem("cart");
            // Se saved existir, parseamos. Se não, é um array vazio.
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Erro ao ler localStorage:", error);
            return [];
        }
    });

    // 💡 2. PERSISTÊNCIA: SALVA NO LOCAL STORAGE SEMPRE QUE cartItems MUDA
    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        } catch (error) {
            console.error("Erro ao salvar no localStorage:", error);
        }
    }, [cartItems]);

    function addToCart(item) {
        // Se você quiser que cada item adicionado seja único (para remoção individual),
        // Adicione um ID temporário aqui:
        const itemWithUniqueId = { 
            ...item, 
            cartUniqueId: Date.now() + Math.random() // Use este ID para remoção
        };
        setCartItems(prev => [...prev, itemWithUniqueId]);
    }

    function removeFromCart(id) {
        // Certifique-se de que o ID que você usa aqui corresponde ao ID do item no array
        setCartItems(prev => prev.filter(item => item.id !== id));
    }
    
    // 💡 3. EXPOR O CONTADOR (totalItems):
    const totalItems = cartItems.length; 

    return (
        <CartContext.Provider value={{ cartItems, totalItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
import React, { useContext } from 'react';
import { CartContext } from "../_components/CartContext.jsx";

function Cart() {
  const { cart, removeFromCartByIndex, clearCart } = useContext(CartContext);

  if(cart.length === 0){
    return <h1>O carrinho está vazio</h1>
  }

  return(
    <>
      <h2>Itens no Carrinho:</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.ingredients}</p>
          <p>{item.price}</p>
          <button onClick={() => removeFromCartByIndex(index)}>Remover</button>
          <hr />
        </div>
      ))}

      <button onClick={clearCart}>Limpar Carrinho</button>
    </>
  )
}

export default Cart;

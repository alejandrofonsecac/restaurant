import React, { useContext } from 'react';
import { CartContext } from "../_components/CartContext.jsx";

import style from '../../styles/cart/main.module.css'
import { Description } from '@mui/icons-material';

function Cart() {
  const { cart, removeFromCartByIndex, clearCart } = useContext(CartContext);

  if(cart.length === 0){
    return <h1>O carrinho está vazio</h1>
  }

  return(
    <>
      <section>
        <h2>Seu Pedido</h2>

        {cart.map((item, index) => (
          <div key={index} className={style.itemPedido}>

            <div className={style.description}>
              <h3 className={style.Name}>{item.name}</h3>
              <p className={style.ingredients}>{item.ingredients}</p>
            </div>

            {item.precoPizza ?(
              <div>
                <label>Escolha o tamanho: </label>
                <select>
                  {Object.entries(item.precoPizza).map(([tamanho, valor]) => (
                    <option key={tamanho} value={tamanho}>
                      {tamanho} - R$ {valor}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p>Preço {item.price}</p>
            )}

            <a onClick={() => removeFromCartByIndex(index)} className={style.clearItem}>Remover</a>
            <hr />
          </div>
        ))}

        

        <button onClick={clearCart}>Limpar Carrinho</button>
      </section>
    </>
  )
}

export default Cart;

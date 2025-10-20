import React, { useContext } from 'react';
import { CartContext } from "../_components/CartContext.jsx";
import { Link } from 'react-router';

import style from '../../styles/cart/main.module.css'

import { Restaurant } from '@mui/icons-material';

function Cart() {
  const { cart, removeFromCartByIndex, clearCart } = useContext(CartContext);

  if(cart.length === 0){
    return(
      <>
        <h1>Carrinho vazio </h1>
        <Link to='/cardapio'>
          <p>Esvazie a sua fome aqui <Restaurant/></p>
        </Link>
      </>
    )
  }else{
    return(
    <>
      <main>
        <h2>Seu Pedido</h2>

        <button onClick={clearCart} style={{width:100}}>Limpar Carrinho</button>
        {cart.map((item, index) => (
          <div key={index} className={style.itemPedido}>

            <div className={style.container}>
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
                <p>Preço {item.priceText}</p>
              )}
              <a onClick={() => removeFromCartByIndex(index)} className={style.clearItem}>Remover</a>
              <hr />
            </div>
          </div>
        ))}
        
        <section>
          {cart.map((item,index) =>
            <div key={index} className={style.cart}>
                <div>
                  <p>Produto: {item.preco}</p>
                </div>
            </div>
          
          )}
        </section>
      </main>
    </>
  )
  }

  
}

export default Cart;

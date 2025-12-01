import React, { useContext } from 'react';
import { CartContext } from "../_components/CartContext.jsx";
import { Link } from 'react-router';

import style from '../../styles/cart/main.module.css';
import styles from '../../styles/cart/cart.module.css';

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
          <div>
            <h2>Forma de Entrega</h2>
          </div>

          <div id="entregaOpcoes" className={style.caixa}>
            <label className={style.radio} htmlFor="delivery">
              <input type="radio" name="delivery" id="delivery" defaultChecked />
              <p>Delivery</p>
              <span className={style.detalhes}>30-45 min • Taxa a partir de R$ 5,00</span>
            </label>

            <label className={style.radio} htmlFor="retirarLocal">
              <p>Retirar no Local</p>
            </label>
              <input type="radio" name="delivery" id="retirarLocal" />
              
              <span className={style.detalhes}>15-20 min • Sem taxa</span>
            
          </div>

          <div id="enderecoEntrega">
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep" placeholder="00000-000" />
          </div>
        </section>
      </main>
    </>
  )
  }

  
}

export default Cart;

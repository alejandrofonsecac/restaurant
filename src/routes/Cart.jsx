import React, { useContext } from 'react';
import { CartContext } from "../_components/CartContext.jsx";
import { Link } from 'react-router';
import { Restaurant } from '@mui/icons-material';

import styles from '../../styles/cart/cart.module.css';

function Cart() {
  const { cart, removeFromCartByIndex, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1>Carrinho vazio</h1>
        <Link to="/cardapio">
          <p>Esvazie a sua fome aqui <Restaurant /></p>
        </Link>
      </>
    );
  }

  return (
    <>

      <main>
        <section id="pedido" className={styles.pedido}>
        

          {cart.map((item, index) => (
            <div key={index} className={styles["pedidoComida"]}>
              
              <img
                className={styles.img}
                src={item.img}
                alt={item.name}
              />

              <div className={styles.descricao}>
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
              </div>

              <div className={styles.quantidade}>
                <button className={styles.add}>-</button>
                <p className={styles.nquantidade}>1</p>
                <button className={styles.add}>+</button>

                {item.precoPizza ? (
                  <select>
                    {Object.entries(item.precoPizza).map(([tamanho, valor]) => (
                      <option key={tamanho} value={tamanho}>
                        {tamanho} - R$ {valor}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className={styles.preco}>{item.priceText}</p>
                )}

                <a
                  onClick={() => removeFromCartByIndex(index)}
                  style={{ cursor: "pointer", display: "block", marginTop: 5 }}
                >
                  Remover
                </a>
              </div>
            </div>

          ))}
        </section>

        <section className={styles.formaEntrega}>
          <h3 className={styles.tituloSection}>Forma de Entrega</h3>

          <div className={styles.entregaOpcoes}>
            <label className={styles.radio}>
              <input type="radio" className={styles.radioInput} name="delivery" defaultChecked />
              Delivery
              <span className={styles.detalhes}>30–45 min • Taxa a partir de R$ 5,00</span>
            </label>

            <label className={styles.radio}>
              <input type="radio" name="delivery" className={styles.radioInput} />
              Retirar no Local
              <span className={styles.detalhes}>15–20 min • Sem taxa</span>
            </label>
          </div>
        </section>

        <section className={styles.enderecoEntrega}>
          <h3 className={styles.tituloSection}>Endereço de Entrega</h3>

          <div>
            <label>CEP
              <input type="text" name = 'cep' placeholder="00000-000" className={styles.input} style={{height: 40}} />
            </label>

            <label>Endereço
              <input type="text" name='endereco' placeholder="Rua, número" className={styles.input} style={{height: 40}} />
            </label>

            <label>Complemento
              <input type="text" name='complemento' placeholder="Apto, bloco (opcional)" className={styles.input} style={{height: 40}} />
            </label>
          </div>
        </section>

        <section>
          <h3 className={styles.tituloSection}>Forma de Pagamento</h3>

          <div id="pagamento-opcoes" className={styles["pagamento-opcoes"]}>
            <label className={styles.radio}>
              <input type="radio" name="pagamento" className={styles.radioInput} defaultChecked />
              Cartão de Crédito
            </label>

            <label className={styles.radio}>
              <input type="radio" name="pagamento" className={styles.radioInput} />
              PIX
            </label>

            <label className={styles.radio}>
              <input type="radio" name="pagamento" className={styles.radioInput} />
              Dinheiro
            </label>
          </div>
        </section>

        <section>
          <h3 className={styles.tituloSection}>Suas Informações</h3>

          <div id="infos-opcoes" className={styles["infos-opcoes"]}>
            <label>Nome Completo
              <input type="text" placeholder="Seu nome" className={styles.input} />
            </label>

            <label>WhatsApp
              <input type="text" placeholder="(00) 00000-0000" className={styles.input} />
            </label>

            <label>Observações do Pedido
              <input type="text" placeholder="Ex: tirar cebola, ponto da carne..." />
            </label>
          </div>
        </section>

        <section id="resumo" className={styles.resumo}>
          <div className={styles["linha-resumo"]}>
            <span>Subtotal</span>
            <span>R$ 85,80</span>
          </div>

          <div className={styles["linha-resumo"]}>
            <span>Taxa de entrega</span>
            <span>R$ 5,00</span>
          </div>

          <div className={`${styles["linha-resumo"]} ${styles.total}`}>
            <span>Total</span>
            <span>R$ 90,80</span>
          </div>

          <button className={styles.finalizarPedido}>Finalizar Pedido 
          </button>
        </section>

      </main>
    </>
  );
}

export default Cart;

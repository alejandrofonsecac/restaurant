import React, { useEffect } from "react";


// ⚠️ Dica: Google Fonts pode ser importado no index.html ou via CSS global

function App() {
  useEffect(() => {
    let isDragging = false;
    const menuItems = document.querySelectorAll(".menu div");

    menuItems.forEach((item) => {
      item.addEventListener("mousedown", () => {
        isDragging = false;
      });

      item.addEventListener("mousemove", () => {
        isDragging = true;
      });

      item.addEventListener("mouseup", (e) => {
        if (!isDragging) {
          const targetId = e.target.getAttribute("data-target");
          if (targetId) {
            document
              .getElementById(targetId)
              .scrollIntoView({ behavior: "smooth" });
          }
        }
      });

      item.addEventListener("touchstart", () => {
        isDragging = false;
      });

      item.addEventListener("touchmove", () => {
        isDragging = true;
      });

      item.addEventListener("touchend", (e) => {
        if (!isDragging) {
          const targetId = e.target.getAttribute("data-target");
          if (targetId) {
            document
              .getElementById(targetId)
              .scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  const clickMenu = () => {
    const itens = document.getElementById("itens");
    if (itens.style.display === "block") {
      itens.style.display = "none";
    } else {
      itens.style.display = "block";
    }
  };

  return (
    <>
      <header>
        <h1>Pasta Bella</h1>
        <ul className="menu-desktop" id="itensDesktop">
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="pages/cardapio/cardapio.html">Cardapio</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
        </ul>
        <div className="header-icons">
          <div className="icon-wrapper">
            <a href="pages/cart.html" className="linkCart">
              <span className="material-icons" id="shoppingCart">
                shopping_cart
              </span>
              <span className="cart-count">0</span>
            </a>
          </div>
          <span className="material-icons" onClick={clickMenu}>
            menu
          </span>
          <menu id="itens" style={{ display: "none" }} className="menu-mobile">
            <ul>
              <li>
                <a href="#">Cardapio</a>
              </li>
              <li>
                <p data-target="contato" id="contatoText">
                  Contato
                </p>
              </li>
              <li>
                <a href="./pages/sobre-nos.html">Sobre nós</a>
              </li>
            </ul>
          </menu>
        </div>
      </header>

      <main>
        {/* HOME */}
        <section className="home">
          <div className="container">
            <div className="caption">
              <h1>Pasta Bella</h1>
              <p>Sabores da Itália direto para sua casa</p>
            </div>
            <a href="pages/cardapio/cardapio.html">
              <button className="button-menu">
                <p>Ver Cardápio</p>
              </button>
            </a>
            <a href="">
              <button className="button-order-now">
                <p>Peça Agora</p>
              </button>
            </a>
          </div>
        </section>

        {/* FOOD CATEGORIAS */}
        <section className="food-categorias">
          <div className="container">
            <h2>Nosso Cardápio</h2>
            <div className="menu-index">
              <div className="box left">
                <img
                  src="imagens/index-page/cardapio/massas.jpg"
                  alt="massas"
                  width="100"
                  className="img-food"
                />
                <p>Massas</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
              <div className="box right">
                <img
                  src="imagens/index-page/cardapio/almoço-e-janta.jpg"
                  alt="Almoço e Janta"
                  width="100"
                  className="img-food"
                />
                <p>Almoço e Janta</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
              <div className="box left">
                <img
                  src="imagens/index-page/cardapio/pratos-executivos.jpg"
                  alt="Pratos Executivos"
                  width="100"
                  className="img-food"
                />
                <p>Pratos Executivos</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
              <div className="box right">
                <img
                  src="imagens/index-page/cardapio/sem-gluten.jpg"
                  alt="Sem Gluten"
                  width="100"
                  className="img-food"
                />
                <p>Sem Glúten</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
              <div className="box left">
                <img
                  src="imagens/index-page/cardapio/porções-e-fast-food.jpg"
                  alt="Porçoes e Fast Foods"
                  width="100"
                  className="img-food"
                />
                <p>Porções & Fast Food</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
              <div className="box right">
                <img
                  src="imagens/index-page/cardapio/sobremesas-e-bebidas.jpg"
                  alt="Sobremesas e Bebidas"
                  width="100"
                  className="img-food"
                />
                <p>Sobremesas & Bebidas</p>
                <img
                  src="imagens/icones/icones-geral/seta-direita-vermelha.png"
                  alt="seta-para-direita"
                  className="seta"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MENU HIGHLIGHTS */}
        <section className="menu-highlights">
          <h2>Destaques do Cardápio</h2>
          <p>Nossos produtos mais pedidos</p>
          <div className="menu-all">
            <div className="food-cart">
              <img
                src="imagens/index-page/destaques/spagetti-carbonara.jpg"
                alt="Spaghetti Carbonara"
                width="280"
                height="250"
              />
              <div>
                <h3>Spaghetti Carbonara</h3>
                <div id="preco-carbonara" className="preco"></div>
                <p>
                  Massa fresca, pancetta crocante, ovos, queijo pecorino e
                  pimenta preta.
                </p>
                <button
                  className="animation-scale"
                  onMouseOver={(e) => e.target.classList.add("-active")}
                  onMouseOut={(e) => e.target.classList.remove("-active")}
                >
                  + Adicionar ao Pedido
                </button>
              </div>
            </div>

            <div className="food-cart">
              <img
                src="imagens/index-page/destaques/lasanha-bolonhesa.jpg"
                alt="Lasanha Bolonhesa"
                width="200"
              />
              <div>
                <h3>Lasanha à Bolonhesa</h3>
                <p>
                  Camadas de massa, molho bolonhesa caseiro, bechame e queijo
                  gratinado.
                </p>
                <button
                  className="animation-scale"
                  onMouseOver={(e) => e.target.classList.add("-active")}
                  onMouseOut={(e) => e.target.classList.remove("-active")}
                >
                  + Adicionar ao Pedido
                </button>
              </div>
            </div>

            <div className="food-cart">
              <img
                src="imagens/index-page/destaques/rissoto-de-fungo.jpg"
                alt="risotto de fungo"
                width="200"
              />
              <div>
                <h3>Risotto de Fungo</h3>
                <p>
                  Arroz arbóreo, mix de cogumelos frescos, vinho branco,
                  manteiga e parmesão.
                </p>
                <button
                  className="animation-scale"
                  onMouseOver={(e) => e.target.classList.add("-active")}
                  onMouseOut={(e) => e.target.classList.remove("-active")}
                >
                  + Adicionar ao Pedido
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY */}
        <section className="delivery">
          <h2>Delivery</h2>
          <div className="box-all">
            <div className="box-son">
              <img
                src="imagens/icones/icones-geral/relogio2.png"
                alt="Relogio"
                width="30"
              />
              <div className="texto">
                <p>Horário de Funcionamento</p>
                <p>Terça a Domingo: 18h às 23h</p>
              </div>
            </div>

            <div className="box-son">
              <img
                src="imagens/icones/icones-geral/motocicleta.png"
                alt="Motocicleta"
                width="30"
              />
              <div className="texto">
                <p>Tempo de Entrega</p>
                <p>30-45 minutos (dependendo da região)</p>
              </div>
            </div>

            <div className="box-son">
              <img
                src="imagens/icones/icones-geral/localizacao.png"
                alt="Localização"
                width="30"
              />
              <div className="texto">
                <p>Área de Entrega</p>
                <p>Até 8km do restaurante</p>
              </div>
            </div>
          </div>
          <button className="botao-site">Peça pelo Site</button>
          <button className="botao-whatsapp">Pedir via WhatsApp</button>
        </section>

        {/* INFO */}
        <section className="info" id="contato">
          <div>
            <h2>Contato e Localização</h2>
            <article>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41987.83091434007!2d2.2628820312500015!3d48.872712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f58915a5091%3A0x3ccf51c60ae858f!2sLa%20Petite%20Bleue!5e0!3m2!1spt-BR!2sbr!4v1746131910132!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
              ></iframe>

              <div className="location-box">
                <img
                  src="imagens/icones/icones-geral/localizacao.png"
                  alt="Localização"
                  width="30"
                />
                <p className="txt">
                  Rua das Oliveiras. 123 - Centro São Paulo. SP
                </p>
              </div>

              <div className="location-box">
                <img
                  src="imagens/icones/icones-geral/telefone.png"
                  alt="Telefone"
                  width="30"
                />
                <p className="txt">(11) 99999-9999</p>
              </div>

              <div className="location-box">
                <img
                  src="imagens/icones/icones-geral/email.png"
                  alt="Email"
                  width="30"
                />
                <p className="txt">contato@pastabella.com.br</p>
              </div>

              <div className="location-box">
                <img
                  src="imagens/icones/icones-geral/relogio.png"
                  alt="Relogia"
                  width="30"
                />
                <p className="txt">Terça a Domingo: 18h às 23h</p>
              </div>
            </article>
          </div>
        </section>

        {/* CONTATO */}
        <section className="contato">
          <div>
            <h2>Fale Conosco</h2>
            <form action="" method="post">
              <label htmlFor="inome">
                <p>Nome:</p>{" "}
                <input type="text" name="nome" id="inome" className="text" />
              </label>
              <label htmlFor="iemail">
                <p>Email:</p>{" "}
                <input type="email" name="email" id="iemail" className="text" />
              </label>
              <label htmlFor="imensagem">
                <p>Mensagem:</p>{" "}
                <textarea
                  name="mensagem"
                  id="imensagem"
                  className="text"
                ></textarea>
              </label>
              <button type="submit" className="botao-site">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h2>Pasta Bella</h2>
          <p>Sabores da Itália direto para sua casa</p>
          <div>
            <img
              src="imagens/icones/redes sociais/facebook.png"
              alt="Icone facebook"
              width="35"
              className="animation"
            />
            <img
              src="imagens/icones/redes sociais/instagram.png"
              alt="Icone instagram"
              width="35"
              className="animation"
            />
            <img
              src="imagens/icones/redes sociais/tripadvisor.png"
              alt="Icone Tripa d Visor"
              width="35"
              className="animation"
            />
          </div>
          <p>2025 Pasta Bella. Todos os direitos reservados.</p>
          <p>Desenvolvido com AMOR para amantes da culinária italiana</p>
        </div>
      </footer>
    </>
  );
}

export default App;

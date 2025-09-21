import React, { useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';


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
      
      <main>
        {/* HOME */}
        <section className="home">
          <div className="container">
            <div className="caption">
              <h1>Pasta Bella</h1>
              <p>Sabores da Itália direto para sua casa</p>
            </div>

            <Link to='/cardapio'>
              <button className="button-menu">
                <p>Ver Cardápio</p>
              </button>
            </Link>
            

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
                  src="../../public/index-page/cardapio/massas.jpg"
                  alt="massas"
                  width="100"
                  className="img-food"
                />
                <p>Massas</p>
                <span class="material-symbols-outlined">
                chevron_right
                </span>
              </div>
              <div className="box right">
                <img
                  src="../../public/index-page/cardapio/almoço-e-janta.jpg"
                  alt="Almoço e Janta"
                  width="100"
                  className="img-food"
                />
                <p>Almoço e Janta</p>
                <span class="material-symbols-outlined">
                chevron_right
                </span>
              </div>
              <div className="box left">
                <img
                  src="../../public/index-page/cardapio/pratos-executivos.jpg"
                  alt="Pratos Executivos"
                  width="100"
                  className="img-food"
                />
                <p>Pratos Executivos</p>
                <span class="material-symbols-outlined">
                chevron_right
                </span>
              </div>
              <div className="box right">
                <img
                  src="../../public/index-page/cardapio/sem-gluten.jpg"
                  alt="Sem Gluten"
                  width="100"
                  className="img-food"
                />
                <p>Sem Glúten</p>
                <span class="material-symbols-outlined">
                chevron_right
                </span>
              </div>
              <div className="box left">
                <img
                  src="../../public/index-page/cardapio/porções-e-fast-food.jpg"
                  alt="Porçoes e Fast Foods"
                  width="100"
                  className="img-food"
                />
                <p>Porções & Fast Food</p>
                <span class="material-symbols-outlined">
chevron_right
</span>
              </div>
              <div className="box right">
                <img
                  src="../../public/index-page/cardapio/sobremesas-e-bebidas.jpg"
                  alt="Sobremesas e Bebidas"
                  width="100"
                  className="img-food"
                />
                <p>Sobremesas & Bebidas</p>
                <span class="material-symbols-outlined">
                chevron_right
                </span>
              </div>
            </div>
          </div>
        </section>

        

        {/* DELIVERY */}
        <section className="delivery">
          <h2>Delivery</h2>
          <div className="box-all">
            <div className="box-son">
              <span class="material-symbols-outlined iconBranco">
                acute
                </span>

              <div className="texto">
                <p>Horário de Funcionamento</p>
                <p>Terça a Domingo: 18h às 23h</p>
              </div>
            </div>

            <div className="box-son">
              <span class="material-symbols-outlined">
                moped
              </span>
              <div className="texto">
                <p>Tempo de Entrega</p>
                <p>30-45 minutos (dependendo da região)</p>
              </div>
            </div>

            <div className="box-son">
              <span class="material-symbols-outlined">
              location_on
              </span>
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
                <span class="material-symbols-outlined">
                location_on
                </span>
                <p className="txt">
                  Rua das Oliveiras. 123 - Centro São Paulo. SP
                </p>
              </div>

              <div className="location-box">
                <span class="material-symbols-outlined">
                call
                </span>
                <p className="txt">(11) 99999-9999</p>
              </div>

              <div className="location-box">
                <span class="material-symbols-outlined">
                stacked_email
                </span>
                <p className="txt">contato@pastabella.com.br</p>
              </div>

              <div className="location-box">
                <span class="material-symbols-outlined">
                pace
                </span>
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
              src="../../public/icones/redes-sociais/facebook.png"
              alt="Icone facebook"
              width="35"
              className="animation"
            />
            <img
              src="../../public/icones/redes-sociais/instagram.png"
              alt="Icone instagram"
              width="35"
              className="animation"
            />
            <img
              src="../../public/icones/redes-sociais/tripadvisor.png"
              alt="Icone Tripa d Visor"
              width="35"
              className="animation"
            />
          </div>
          <p>2025 Pasta Bella. Todos os direitos reservados.</p>
          <p>Desenvolvido com AMOR para amantes da culinária italiana</p>
        </div>
      </footer>
      <Outlet/>
    </>
  );
}

export default App;

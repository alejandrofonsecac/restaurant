import React, { useRef, useEffect } from 'react';
import style from '../../../style/main.module.css'

function Main() {
    const containerRef = useRef(null);

    // Variáveis de estado para o carrossel
    const state = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        velocity: 0,
        lastX: 0,
        momentumID: null,
        lastTime: 0
    }).current;

    // Para a inércia
    const stopMomentum = () => {
        cancelAnimationFrame(state.momentumID);
    };

    // Função que cria o efeito de desaceleração
    const momentumScroll = () => {
        containerRef.current.scrollLeft += state.velocity;
        state.velocity *= 0.95; // fator de desaceleração
        
        if (Math.abs(state.velocity) > 0.5) {
            state.momentumID = requestAnimationFrame(momentumScroll);
        } else {
            // Snap suave quando a velocidade for baixa
            const container = containerRef.current;
            const itemWidth = 150 + 8; // largura do item + gap
            const snapPosition = Math.round(container.scrollLeft / itemWidth) * itemWidth;
            
            container.scrollTo({
                left: snapPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleDown = (clientX) => {
        state.isDown = true;
        const container = containerRef.current;
        state.startX = clientX - container.getBoundingClientRect().left;
        state.scrollLeft = container.scrollLeft;
        state.lastX = state.startX;
        state.velocity = 0;
        state.lastTime = performance.now();
        stopMomentum();
    };

    const handleMove = (clientX) => {
        if (!state.isDown) return;
        
        const container = containerRef.current;
        const x = clientX - container.getBoundingClientRect().left;
        const walk = (x - state.startX) * 1.5; // sensibilidade do arrasto
        container.scrollLeft = state.scrollLeft - walk;

        // Calcula velocidade para a inércia
        const now = performance.now();
        const deltaTime = now - state.lastTime;
        
        if (deltaTime > 0) {
            state.velocity = (container.scrollLeft - (state.scrollLeft - walk)) / deltaTime * 16;
        }
        
        state.lastX = x;
        state.lastTime = now;
    };

    const handleEnd = () => {
        if (state.isDown) {
            state.isDown = false;
            momentumScroll();
        }
    };

    // Eventos de mouse
    const handleMouseDown = (e) => {
        handleDown(e.clientX);
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientX);
    };

    // Eventos de touch
    const handleTouchStart = (e) => {
        handleDown(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    // Cleanup effect
    useEffect(() => {
        return () => {
            stopMomentum();
        };
    }, []);

    return (
        <main>
            <menu>
                <div
                    className="containerMenu"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleEnd}
                    onMouseUp={handleEnd}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleEnd}
                >
                    <div className="itens principalMenu"><p>Menu Principal</p></div>
                    <div className="PizzasMenu"><p>Pizzas</p></div>
                    <div className="itens pratosExecutivos"><p>Pratos Executivos</p></div>
                    <div className="itens porções"><p>Porções</p></div>
                    <div className="itens semGluten"><p>Sem Glúten</p></div>
                    <div className="itens sobremesas"><p>Sobremesas</p></div>
                    <div className="itens bebidas"><p>Bebidas</p></div>
                </div>
            </menu>

            
                        {/* Categoria Pizzas */}
            <div className="category-container">
                <h3 className="category-title">Pizzas</h3>
                <div className="food-items">
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Margherita</h4>
                        <p className="ingredients">Massa artesanal, molho de tomate italiano, mussarela de búfala, manjericão fresco, azeite extra virgem</p>
                    </div>
                    <span className='margueritaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Pepperoni</h4>
                        <p className="ingredients">Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni</p>
                    </div>
                    <span className='pepperoniPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Frango com Catupiry</h4>
                        <p className="ingredients">Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso</p>
                    </div>
                    <span className='frangoPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Calabresa</h4>
                        <p className="ingredients">Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano</p>
                    </div>
                    <span className='calabresaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Quatro Queijos</h4>
                        <p className="ingredients">Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina</p>
                    </div>
                    <span className='queijosPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Portuguesa</h4>
                        <p className="ingredients">Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela</p>
                    </div>
                    <span className='portuguesaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Vegetariana</h4>
                        <p className="ingredients">Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo</p>
                    </div>
                    <span className='vegetarianaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Napolitana</h4>
                        <p className="ingredients">Molho artesanal, queijo, tomate fresco, orégano, manjericão</p>
                    </div>
                    <span className='napolitanaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Toscana</h4>
                        <p className="ingredients">Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino</p>
                    </div>
                    <span className='toscanaPizza'></span>
                </div>
                
                <div className="food-item">
                    <div>
                        <h4 className="food-name">Bella Speciale</h4>
                        <p className="ingredients">Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão</p>
                    </div>
                    <span className='bellaPizza'></span>
                </div>
                
            </div>

                        {/* Categoria Massas - Completa */}
            <div className="category-container">
                <h3 className="category-title">🍝 Massas</h3>
                <div className="food-items">
                    
                {/* Massa 1 */}
                <div className="food-item">
                <div>
                    <h4>Espaguete à Bolonhesa</h4>
                    <p>Espaguete com molho de carne moída cozido lentamente com tomate, cebola e ervas</p>
                </div>
                <span className={style.espagueteBolonhesa}>
                    
                </span>
                </div>

                {/* Massa 2 */}
                <div className="food-item">
                <div>
                    <h4>Fettuccine Alfredo</h4>
                    <p>Molho cremoso de parmesão, manteiga e creme de leite</p>
                </div>
                <span>
                    <img src="/images/massas/alfredo.jpg" alt="Fettuccine Alfredo" />
                </span>
                </div>

                {/* Massa 3 */}
                <div className="food-item">
                <div>
                    <h4>Ravioli de Ricota com Espinafre</h4>
                    <p>Recheio cremoso com molho branco leve</p>
                </div>
                <span>
                    <img src="/images/massas/ravioli.jpg" alt="Ravioli de Ricota" />
                </span>
                </div>

                {/* Massa 4 */}
                <div className="food-item">
                <div>
                    <h4>Penne ao Pesto</h4>
                    <p>Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite</p>
                </div>
                <span>
                    <img src="/images/massas/pesto.jpg" alt="Penne ao Pesto" />
                </span>
                </div>

                {/* Massa 5 */}
                <div className="food-item">
                <div>
                    <h4>Lasanha à Bolonhesa</h4>
                    <p>Camadas de massa com carne, queijo e molho</p>
                </div>
                <span>
                    <img src="/images/massas/lasanha.jpg" alt="Lasanha à Bolonhesa" />
                </span>
                </div>

                {/* Massa 6 */}
                <div className="food-item">
                <div>
                    <h4>Gnocchi ao Sugo</h4>
                    <p>Nhoque de batata com molho de tomate e manjericão</p>
                </div>
                <span>
                    <img src="/images/massas/gnocchi.jpg" alt="Gnocchi ao Sugo" />
                </span>
                </div>

                {/* Massa 7 */}
                <div className="food-item">
                <div>
                    <h4>Canelone de Frango</h4>
                    <p>Recheado com frango e catupiry, coberto com molho rosé</p>
                </div>
                <span>
                    <img src="/images/massas/canelone.jpg" alt="Canelone de Frango" />
                </span>
                </div>

                {/* Massa 8 */}
                <div className="food-item">
                <div>
                    <h4>Espaguete Carbonara</h4>
                    <p>Bacon, ovos, queijo parmesão e pimenta do reino</p>
                </div>
                <span>
                    <img src="/images/massas/carbonara.jpg" alt="Espaguete Carbonara" />
                </span>
                </div>

                {/* Massa 9 */}
                <div className="food-item">
                <div>
                    <h4>Rondelli de Presunto e Queijo</h4>
                    <p>Molho bechamel e queijo gratinado</p>
                </div>
                <span>
                    <img src="/images/massas/rondelli.jpg" alt="Rondelli de Presunto" />
                </span>
                </div>

                {/* Massa 10 */}
                <div className="food-item">
                <div>
                    <h4>Farfalle à Quatro Queijos</h4>
                    <p>Molho de mussarela, gorgonzola, catupiry e parmesão</p>
                </div>
                <span>
                    <img src="/images/massas/farfalle.jpg" alt="Farfalle à Quatro Queijos" />
                </span>
                </div>

                {/* Massa 11 */}
                <div className="food-item">
                <div>
                    <h4>Tagliatelle à Puttanesca</h4>
                    <p>Azeitonas, alcaparras, tomate e alho</p>
                </div>
                <span>
                    <img src="/images/massas/tagliatelle.jpg" alt="Tagliatelle à Puttanesca" />
                </span>
                </div>

                {/* Massa 12 */}
                <div className="food-item">
                <div>
                    <h4>Tortellini de Carne com Molho Funghi</h4>
                    <p>Cogumelos frescos, creme e queijo</p>
                </div>
                <span>
                    <img src="/images/massas/tortellini.jpg" alt="Tortellini de Carne" />
                </span>
                </div>

            </div>
            </div>
                        
                        {/* Categoria Pratos Executivos */}
            <div className="category-container">
            <h3 className="category-title">🍽️ Pratos Executivos</h3>
            <div className="food-items">
                
                {/* Prato 1 */}
                <div className="food-item">
                <div>
                    <h4>Filé à Parmegiana</h4>
                    <p>Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas</p>
                </div>
                <span>
                    <img src="/images/pratos/parmegiana.jpg" alt="Filé à Parmegiana" />
                </span>
                </div>

                {/* Prato 2 */}
                <div className="food-item">
                <div>
                    <h4>Strogonoff de Frango</h4>
                    <p>Arroz branco, batata palha e frango em molho cremoso</p>
                </div>
                <span>
                    <img src="/images/pratos/strogonoff.jpg" alt="Strogonoff de Frango" />
                </span>
                </div>

                {/* Prato 3 */}
                <div className="food-item">
                <div>
                    <h4>Bife Acebolado</h4>
                    <p>Acompanha arroz, feijão, farofa e salada</p>
                </div>
                <span>
                    <img src="/images/pratos/acebolado.jpg" alt="Bife Acebolado" />
                </span>
                </div>

                {/* Prato 4 */}
                <div className="food-item">
                <div>
                    <h4>Peixe Grelhado com Legumes</h4>
                    <p>Tilápia grelhada com mix de legumes no vapor</p>
                </div>
                <span>
                    <img src="/images/pratos/peixe.jpg" alt="Peixe Grelhado" />
                </span>
                </div>

                {/* Prato 5 */}
                <div className="food-item">
                <div>
                    <h4>Frango Grelhado com Purê</h4>
                    <p>Purê de batata caseiro e arroz</p>
                </div>
                <span>
                    <img src="/images/pratos/frango.jpg" alt="Frango Grelhado" />
                </span>
                </div>

                {/* Prato 6 */}
                <div className="food-item">
                <div>
                    <h4>Risoto de Cogumelos</h4>
                    <p>Arroz arbório, cogumelos frescos, vinho branco, parmesão</p>
                </div>
                <span>
                    <img src="/images/pratos/risoto.jpg" alt="Risoto de Cogumelos" />
                </span>
                </div>

                {/* Prato 7 */}
                <div className="food-item">
                <div>
                    <h4>Almôndegas ao Sugo</h4>
                    <p>Com arroz branco e purê de batata</p>
                </div>
                <span>
                    <img src="/images/pratos/almondegas.jpg" alt="Almôndegas ao Sugo" />
                </span>
                </div>

                {/* Prato 8 */}
                <div className="food-item">
                <div>
                    <h4>Carne Assada com Polenta</h4>
                    <p>Fatias macias de carne com molho e polenta cremosa</p>
                </div>
                <span>
                    <img src="/images/pratos/polenta.jpg" alt="Carne Assada" />
                </span>
                </div>

            </div>
            </div>

                        {/* Categoria Porções */}
            <div className="category-container">
            <h3 className="category-title">🍟 Porções</h3>
            <div className="food-items">
                
                {/* Porção 1 */}
                <div className="food-item">
                <div>
                    <h4>Batata Frita Tradicional</h4>
                    <p>Batatas crocantes com sal e orégano</p>
                </div>
                <span>
                    <img src="/images/porcoes/batata-frita.jpg" alt="Batata Frita Tradicional" />
                </span>
                </div>

                {/* Porção 2 */}
                <div className="food-item">
                <div>
                    <h4>Batata Rústica com Alho e Alecrim</h4>
                    <p>Batatas assadas com alho fresco e alecrim</p>
                </div>
                <span>
                    <img src="/images/porcoes/batata-rustica.jpg" alt="Batata Rústica" />
                </span>
                </div>

                {/* Porção 3 */}
                <div className="food-item">
                <div>
                    <h4>Polenta Frita</h4>
                    <p>Palitos de polenta crocantes</p>
                </div>
                <span>
                    <img src="/images/porcoes/polenta-frita.jpg" alt="Polenta Frita" />
                </span>
                </div>

                {/* Porção 4 */}
                <div className="food-item">
                <div>
                    <h4>Mandioca Frita</h4>
                    <p>Servida com molho da casa</p>
                </div>
                <span>
                    <img src="/images/porcoes/mandioca.jpg" alt="Mandioca Frita" />
                </span>
                </div>

                {/* Porção 5 */}
                <div className="food-item">
                <div>
                    <h4>Anéis de Cebola Empanados</h4>
                    <p>Cebola empanada crocante</p>
                </div>
                <span>
                    <img src="/images/porcoes/aneis-cebola.jpg" alt="Anéis de Cebola" />
                </span>
                </div>

                {/* Porção 6 */}
                <div className="food-item">
                <div>
                    <h4>Iscas de Frango Empanadas</h4>
                    <p>Acompanha molho mostarda e mel</p>
                </div>
                <span>
                    <img src="/images/porcoes/iscas-frango.jpg" alt="Iscas de Frango" />
                </span>
                </div>

                {/* Porção 7 */}
                <div className="food-item">
                <div>
                    <h4>Mini Almôndegas</h4>
                    <p>Com molho de tomate</p>
                </div>
                <span>
                    <img src="/images/porcoes/mini-almondegas.jpg" alt="Mini Almôndegas" />
                </span>
                </div>

                {/* Porção 8 */}
                <div className="food-item">
                <div>
                    <h4>Bolinho de Arroz com Queijo</h4>
                    <p>Bolinho crocante com recheio de queijo derretido</p>
                </div>
                <span>
                    <img src="/images/porcoes/bolinho-arroz.jpg" alt="Bolinho de Arroz" />
                </span>
                </div>

                {/* Porção 9 */}
                <div className="food-item">
                <div>
                    <h4>Mini Pizzas (6 unid)</h4>
                    <p>Sabores variados</p>
                </div>
                <span>
                    <img src="/images/porcoes/mini-pizzas.jpg" alt="Mini Pizzas" />
                </span>
                </div>

                {/* Porção 10 */}
                <div className="food-item">
                <div>
                    <h4>Pão de Alho com Queijo</h4>
                    <p>4 unidades</p>
                </div>
                <span>
                    <img src="/images/porcoes/pao-alho.jpg" alt="Pão de Alho" />
                </span>
                </div>

                {/* Porção 11 */}
                <div className="food-item">
                <div>
                    <h4>Tábua de Frios</h4>
                    <p>Presunto parma, salame, queijos, azeitonas</p>
                </div>
                <span>
                    <img src="/images/porcoes/tabua-frios.jpg" alt="Tábua de Frios" />
                </span>
                </div>

                {/* Porção 12 */}
                <div className="food-item">
                <div>
                    <h4>Cesta de Pães com Patês Artesanais</h4>
                    <p>Pães variados com seleção de patês</p>
                </div>
                <span>
                    <img src="/images/porcoes/cesta-paes.jpg" alt="Cesta de Pães" />
                </span>
                </div>

            </div>
            </div>

                        {/* Categoria Sem Glúten */}
            <div className="category-container">
            <h3 className="category-title">🌱 Sem Glúten</h3>
            <div className="food-items">
                
                <div className="food-item">
                <div>
                    <h4>Espaguete Sem Glúten ao Pomodoro</h4>
                    <p>Molho de tomate fresco, manjericão e parmesão</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/espaguete.jpg" alt="Espaguete Sem Glúten" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Risoto de Frango com Legumes</h4>
                    <p>Sem uso de farinha ou glúten</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/risoto.jpg" alt="Risoto de Frango" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Nhoque de Mandioquinha com Molho Suave</h4>
                    <p>Feito com mandioquinha fresca</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/nhoque.jpg" alt="Nhoque de Mandioquinha" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Salada Bella</h4>
                    <p>Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/salada.jpg" alt="Salada Bella" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Quibe de Abóbora Assado com Hortelã</h4>
                    <p>Acompanhado de salada</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/quibe.jpg" alt="Quibe de Abóbora" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Panqueca de Tapioca com Recheio de Queijo e Tomate</h4>
                    <p>Massa 100% sem glúten</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/panqueca.jpg" alt="Panqueca de Tapioca" />
                </span>
                </div>

            </div>
            </div>

                        {/* Categoria Sobremesas */}
            <div className="category-container">
            <h3 className="category-title">🧁 Sobremesas</h3>
            <div className="food-items">
                
                <div className="food-item">
                <div>
                    <h4>Tiramisù Tradicional</h4>
                    <p>Creme de mascarpone, café e cacau</p>
                </div>
                <span>
                    <img src="/images/sobremesas/tiramisu.jpg" alt="Tiramisù Tradicional" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Panna Cotta com Frutas Vermelhas</h4>
                    <p>Creme italiano com calda de frutas</p>
                </div>
                <span>
                    <img src="/images/sobremesas/panna-cotta.jpg" alt="Panna Cotta" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Torta de Limão com Merengue</h4>
                    <p>Base crocante, creme de limão e merengue</p>
                </div>
                <span>
                    <img src="/images/sobremesas/torta-limao.jpg" alt="Torta de Limão" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Mousse de Chocolate Meio Amargo</h4>
                    <p>Textura aerada e sabor intenso</p>
                </div>
                <span>
                    <img src="/images/sobremesas/mousse.jpg" alt="Mousse de Chocolate" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Gelato Italiano (3 sabores)</h4>
                    <p>Chocolate, baunilha e frutas vermelhas</p>
                </div>
                <span>
                    <img src="/images/sobremesas/gelato.jpg" alt="Gelato Italiano" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Cannoli com Ricota e Gotas de Chocolate</h4>
                    <p>Massa crocante recheada</p>
                </div>
                <span>
                    <img src="/images/sobremesas/cannoli.jpg" alt="Cannoli" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Cheesecake de Frutas Vermelhas</h4>
                    <p>Base de biscoito, creme de queijo e geleia</p>
                </div>
                <span>
                    <img src="/images/sobremesas/cheesecake.jpg" alt="Cheesecake" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Brownie com Calda de Nutella</h4>
                    <p>Quentinho e acompanha sorvete</p>
                </div>
                <span>
                    <img src="/images/sobremesas/brownie.jpg" alt="Brownie" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Creme Brûlée com Baunilha</h4>
                    <p>Creme francês com açúcar queimado</p>
                </div>
                <span>
                    <img src="/images/sobremesas/creme-brulee.jpg" alt="Creme Brûlée" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Mini Pudim de Leite Condensado</h4>
                    <p>Porção individual com calda de caramelo</p>
                </div>
                <span>
                    <img src="/images/sobremesas/pudim.jpg" alt="Pudim" />
                </span>
                </div>

            </div>
            </div>

        </div>

                    {/* Categoria Bebidas */}
            <div className="category-container">
            <h3 className="category-title">🥤 Bebidas</h3>
            <div className="food-items">
                
                <div className="food-item">
                <div>
                    <h4>Refrigerante Lata (350ml)</h4>
                    <p>Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite</p>
                </div>
                <span>
                    <img src="/images/bebidas/refrigerante.jpg" alt="Refrigerante Lata" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Água Mineral</h4>
                    <p>Com ou sem gás (500ml)</p>
                </div>
                <span>
                    <img src="/images/bebidas/agua.jpg" alt="Água Mineral" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Suco Natural (300ml)</h4>
                    <p>Laranja, Uva, Abacaxi com Hortelã, Manga</p>
                </div>
                <span>
                    <img src="/images/bebidas/suco.jpg" alt="Suco Natural" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Suco Detox (300ml)</h4>
                    <p>Couve, limão, gengibre e maçã</p>
                </div>
                <span>
                    <img src="/images/bebidas/detox.jpg" alt="Suco Detox" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Chá Gelado (500ml)</h4>
                    <p>Limão ou Pêssego</p>
                </div>
                <span>
                    <img src="/images/bebidas/cha-gelado.jpg" alt="Chá Gelado" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Chá Quente (300ml)</h4>
                    <p>Hortelã, Camomila ou Erva-Doce</p>
                </div>
                <span>
                    <img src="/images/bebidas/cha-quente.jpg" alt="Chá Quente" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Café Expresso</h4>
                    <p>Grãos 100% arábica</p>
                </div>
                <span>
                    <img src="/images/bebidas/cafe.jpg" alt="Café Expresso" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Capuccino Cremoso</h4>
                    <p>Com chocolate em pó ou canela</p>
                </div>
                <span>
                    <img src="/images/bebidas/capuccino.jpg" alt="Capuccino" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Cerveja Long Neck (355ml)</h4>
                    <p>Heineken, Budweiser, Stella Artois</p>
                </div>
                <span>
                    <img src="/images/bebidas/cerveja.jpg" alt="Cerveja Long Neck" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Vinho Tinto Taça (180ml)</h4>
                    <p>Chianti ou Merlot</p>
                </div>
                <span>
                    <img src="/images/bebidas/vinho-tinto.jpg" alt="Vinho Tinto" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Vinho Branco Taça (180ml)</h4>
                    <p>Chardonnay ou Sauvignon Blanc</p>
                </div>
                <span>
                    <img src="/images/bebidas/vinho-branco.jpg" alt="Vinho Branco" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Spritz Italiano</h4>
                    <p>Aperol com prosecco e soda</p>
                </div>
                <span>
                    <img src="/images/bebidas/spritz.jpg" alt="Spritz Italiano" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Água Tônica com Limão</h4>
                    <p>Servida com gelo e rodelas de limão</p>
                </div>
                <span>
                    <img src="/images/bebidas/tonica.jpg" alt="Água Tônica" />
                </span>
                </div>

                <div className="food-item">
                <div>
                    <h4>Limonada Siciliana</h4>
                    <p>Feita com limões frescos e hortelã</p>
                </div>
                <span>
                    <img src="/images/bebidas/limonada.jpg" alt="Limonada Siciliana" />
                </span>
                </div>

            </div>
            </div>

        </main>
    );
}

export default Main;
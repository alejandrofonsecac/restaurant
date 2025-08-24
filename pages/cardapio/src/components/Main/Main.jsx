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
                    className={style.containerMenu}
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleEnd}
                    onMouseUp={handleEnd}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleEnd}
                >
                    <div className={`${style.itens} ${style.principalMenu}`}><p>Menu Principal</p></div>
                    <div className={`${style.itens} ${style.PizzasMenu}`}><p>Pizzas</p></div>
                    <div className={`${style.itens} ${style.pratosExecutivos}`}><p>Pratos Executivos</p></div>
                    <div className={`${style.itens} ${style.porções}`}><p>Porções</p></div>
                    <div className={`${style.itens} ${style.semGluten}`}><p>Sem Glúten</p></div>
                    <div className={`${style.itens} ${style.sobremesas}`}><p>Sobremesas</p></div>
                    <div className={`${style.itens} ${style.bebidas}`}><p>Bebidas</p></div>
                </div>
            </menu>

            
                        {/* Categoria Pizzas */}
            <div className="category-container">
                <h3 className="category-title">Pizzas</h3>
                <div className="food-items">
                
                    <div className={style.foodItem}>
                        <div>
                            <h4 className={style.foodName}>Margherita</h4>
                            <p className={style.ingredients}>Massa artesanal, molho de tomate italiano, mussarela de búfala, manjericão fresco, azeite extra virgem</p>
                        </div>
                        <span className={style.margueritaPizza}></span>
                        <div>
                            <button>Adicionar</button>
                            <p></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Pepperoni</h4>
                            <p className={style.ingredients}>Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni</p>
                        </div>
                        <span className={style.pepperoniPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Frango com Catupiry</h4>
                            <p className={style.ingredients}>Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso</p>
                        </div>
                        <span className={style.frangoPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Calabresa</h4>
                            <p className={style.ingredients}>Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano</p>
                        </div>
                        <span className={style.calabresaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Quatro Queijos</h4>
                            <p className={style.ingredients}>Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina</p>
                        </div>
                        <span className={style.queijosPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Portuguesa</h4>
                            <p className={style.ingredients}>Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela</p>
                        </div>
                        <span className={style.portuguesaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Vegetariana</h4>
                            <p className={style.ingredients}>Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo</p>
                        </div>
                        <span className={style.vegetarianaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Napolitana</h4>
                            <p className={style.ingredients}>Molho artesanal, queijo, tomate fresco, orégano, manjericão</p>
                        </div>
                        <span className={style.napolitanaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Toscana</h4>
                            <p className={style.ingredients}>Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino</p>
                        </div>
                        <span className={style.toscanaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>
                    
                    <div className={style.foodItem}>
                        <div>
                            <h4 className="food-name">Bella Speciale</h4>
                            <p className={style.ingredients}>Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão</p>
                        </div>
                        <span className={style.bellaPizza}></span>
                        <div>
                            <button>Adicionar ao Carrinho</button>
                            <p id='preco'></p>
                        </div>
                    </div>                    
            </div>

                        {/* Categoria Massas - Completa */}
            <div className="category-container">
                <h3 className="category-title">🍝 Massas</h3>
                <div className="food-items">
                    
                {/* Massa 1 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Espaguete à Bolonhesa</h4>
                    <p className={style.ingredients}>Espaguete com molho de carne moída cozido lentamente com tomate, cebola e ervas</p>
                </div>
                <span className={style.espagueteBolonhesa}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 2 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Fettuccine Alfredo</h4>
                    <p className={style.ingredients}>Molho cremoso de parmesão, manteiga e creme de leite</p>
                </div>
                    <span className={style.fettucineAlfredo}></span>
                    <div>
                        <button>Adicionar ao Carrinho</button>
                        <p id='preco'></p>
                    </div>
                </div>

                {/* Massa 3 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Ravioli de Ricota com Espinafre</h4>
                    <p className={style.ingredients}>Recheio cremoso com molho branco leve</p>
                </div>
                <span className={style.raviolliRicota}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 4 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Penne ao Pesto</h4>
                    <p className={style.ingredients}>Molho pesto fresco de manjericão, nozes, alho, parmesão e azeite</p>
                </div>
                <span className={style.pennePesto}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 5 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Lasanha à Bolonhesa</h4>
                    <p className={style.ingredients}>Camadas de massa com carne, queijo e molho</p>
                </div>
                <span className={style.lasanhaBolonhesa}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 6 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Gnocchi ao Sugo</h4>
                    <p className={style.ingredients}>Nhoque de batata com molho de tomate e manjericão</p>
                </div>
                <span className={style.gnocchiSugo}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 7 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Canelone de Frango</h4>
                    <p className={style.ingredients}>Recheado com frango e catupiry, coberto com molho rosé</p>
                </div>
                <span className={style.caneloneFrango}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 8 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Espaguete Carbonara</h4>
                    <p className={style.ingredients}>Bacon, ovos, queijo parmesão e pimenta do reino</p>
                </div>
                <span className={style.espagueteCarbonara}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 9 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Rondelli de Presunto e Queijo</h4>
                    <p className={style.ingredients}>Molho bechamel e queijo gratinado</p>
                </div>
                <span className={style.rondelliPresunto}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 10 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Farfalle à Quatro Queijos</h4>
                    <p className={style.ingredients}>Molho de mussarela, gorgonzola, catupiry e parmesão</p>
                </div>
                <span className={style.farfalleQueijos}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 11 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Tagliatelle à Puttanesca</h4>
                    <p className={style.ingredients}>Azeitonas, alcaparras, tomate e alho</p>
                </div>
                <span className={style.tagliatellePutatesca}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Massa 12 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Tortellini de Carne com Molho Funghi</h4>
                    <p>Cogumelos frescos, creme e queijo</p>
                </div>
                <span className={style.tortelliniCarne}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>
                        
                        {/* Categoria Pratos Executivos */}
            <div className="category-container">
            <h3 className="category-title">🍽️ Pratos Executivos</h3>
            <div className="food-items">
                
                {/* Prato 1 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Filé à Parmegiana</h4>
                    <p className={style.ingredients}>Filé empanado com molho de tomate e queijo, arroz branco e batatas fritas</p>
                </div>
                <span className={style.fileParmegiana}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 2 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Strogonoff de Frango</h4>
                    <p className={style.ingredients}>Arroz branco, batata palha e frango em molho cremoso</p>
                </div>
                <span className={style.strogonoffFrango}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 3 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Bife Acebolado</h4>
                    <p className={style.ingredients}>Acompanha arroz, feijão, farofa e salada</p>
                </div>
                <span className={style.bifeAcebolado}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 4 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Peixe Grelhado com Legumes</h4>
                    <p className={style.ingredients}>Tilápia grelhada com mix de legumes no vapor</p>
                </div>
                <span className={style.peixeGrelhado}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 5 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Frango Grelhado com Purê</h4>
                    <p className={style.ingredients}>Purê de batata caseiro e arroz</p>
                </div>
                <span className={style.frangoGrelhado}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 6 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Risoto de Cogumelos</h4>
                    <p className={style.ingredients}>Arroz arbório, cogumelos frescos, vinho branco, parmesão</p>
                </div>
                <span className={style.risotoCogumelos}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 7 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Almôndegas ao Sugo</h4>
                    <p className={style.ingredients}>Com arroz branco e purê de batata</p>
                </div>
                <span className={style.almondegasSugo}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Prato 8 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Carne Assada com Polenta</h4>
                    <p className={style.ingredients}>Fatias macias de carne com molho e polenta cremosa</p>
                </div>
                <span className={style.carneAssada}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>

                        {/* Categoria Porções */}
            <div className="category-container">
            <h3 className="category-title">🍟 Porções</h3>
            <div className="food-items">
                
                {/* Porção 1 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Batata Frita Tradicional</h4>
                    <p className={style.ingredients}>Batatas crocantes com sal e orégano</p>
                </div>
                <span className={style.batataFritaTrad}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 2 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Batata Rústica com Alho e Alecrim</h4>
                    <p className={style.ingredients}>Batatas assadas com alho fresco e alecrim</p>
                </div>
                <span className={style.batataRustica}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 3 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Polenta Frita</h4>
                    <p className={style.ingredients}>Palitos de polenta crocantes</p>
                </div>
                <span className={style.polentaFrita}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 4 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Mandioca Frita</h4>
                    <p className={style.ingredients}>Servida com molho da casa</p>
                </div>
                <span className={style.mandiocaFrita}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 5 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Anéis de Cebola Empanados</h4>
                    <p className={style.ingredients}>Cebola empanada crocante</p>
                </div>
                <span className={style.aneisCebola}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 6 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Iscas de Frango Empanadas</h4>
                    <p className={style.ingredients}>Acompanha molho mostarda e mel</p>
                </div>
                <span className={style.iscasFrango}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 7 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Mini Almôndegas</h4>
                    <p>Com molho de tomate</p>
                </div>
                <span className={style.miniAlmondegas}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 8 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Bolinho de Arroz com Queijo</h4>
                    <p className={style.ingredients}>Bolinho crocante com recheio de queijo derretido</p>
                </div>
                <span className={style.bolinhoArroz}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 9 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Mini Pizzas (6 unid)</h4>
                    <p className={style.ingredients}>Sabores variados</p>
                </div>
                <span className={style.miniPizzas}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 10 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Pão de Alho com Queijo</h4>
                    <p className={style.ingredients}>4 unidades</p>
                </div>
                <span className={style.paoAlho}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 11 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Tábua de Frios</h4>
                    <p className={style.ingredients}>Presunto parma, salame, queijos, azeitonas</p>
                </div>
                <span className={style.tabuaFrios}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                {/* Porção 12 */}
                <div className={style.foodItem}>
                <div>
                    <h4>Cesta de Pães com Patês Artesanais</h4>
                    <p className={style.ingredients}>Pães variados com seleção de patês</p>
                </div>
                <span className={style.cestaPaes}></span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>

                        {/* Categoria Sem Glúten */}
            <div className="category-container">
            <h3 className="category-title">🌱 Sem Glúten</h3>
            <div className="food-items">
                
                <div className={style.foodItem}>
                <div>
                    <h4>Espaguete Sem Glúten ao Pomodoro</h4>
                    <p className={style.ingredients}>Molho de tomate fresco, manjericão e parmesão</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/espaguete.jpg" alt="Espaguete Sem Glúten" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Risoto de Frango com Legumes</h4>
                    <p className={style.ingredients}>Sem uso de farinha ou glúten</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/risoto.jpg" alt="Risoto de Frango" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Nhoque de Mandioquinha com Molho Suave</h4>
                    <p className={style.ingredients}>Feito com mandioquinha fresca</p>
                </div>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                <span>
                    <img src="/images/sem-gluten/nhoque.jpg" alt="Nhoque de Mandioquinha" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Salada Bella</h4>
                    <p className={style.ingredients}>Alface, rúcula, tomate, pepino, ovo cozido, frango grelhado</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/salada.jpg" alt="Salada Bella" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Quibe de Abóbora Assado com Hortelã</h4>
                    <p className={style.ingredients}>Acompanhado de salada</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/quibe.jpg" alt="Quibe de Abóbora" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Panqueca de Tapioca com Recheio de Queijo e Tomate</h4>
                    <p className={style.ingredients}>Massa 100% sem glúten</p>
                </div>
                <span>
                    <img src="/images/sem-gluten/panqueca.jpg" alt="Panqueca de Tapioca" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>

                        {/* Categoria Sobremesas */}
            <div className="category-container">
            <h3 className="category-title">🧁 Sobremesas</h3>
            <div className="food-items">
                
                <div className={style.foodItem}>
                <div>
                    <h4>Tiramisù Tradicional</h4>
                    <p className={style.ingredients}>Creme de mascarpone, café e cacau</p>
                </div>
                <span>
                    <img src="/images/sobremesas/tiramisu.jpg" alt="Tiramisù Tradicional" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Panna Cotta com Frutas Vermelhas</h4>
                    <p className={style.ingredients}>Creme italiano com calda de frutas</p>
                </div>
                <span>
                    <img src="/images/sobremesas/panna-cotta.jpg" alt="Panna Cotta" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Torta de Limão com Merengue</h4>
                    <p className={style.ingredients}>Base crocante, creme de limão e merengue</p>
                </div>
                <span>
                    <img src="/images/sobremesas/torta-limao.jpg" alt="Torta de Limão" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Mousse de Chocolate Meio Amargo</h4>
                    <p className={style.ingredients}>Textura aerada e sabor intenso</p>
                </div>
                <span>
                    <img src="/images/sobremesas/mousse.jpg" alt="Mousse de Chocolate" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Gelato Italiano (3 sabores)</h4>
                    <p className={style.ingredients}>Chocolate, baunilha e frutas vermelhas</p>
                </div>
                <span>
                    <img src="/images/sobremesas/gelato.jpg" alt="Gelato Italiano" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Cannoli com Ricota e Gotas de Chocolate</h4>
                    <p className={style.ingredients}>Massa crocante recheada</p>
                </div>
                <span>
                    <img src="/images/sobremesas/cannoli.jpg" alt="Cannoli" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Cheesecake de Frutas Vermelhas</h4>
                    <p className={style.ingredients}>Base de biscoito, creme de queijo e geleia</p>
                </div>
                <span>
                    <img src="/images/sobremesas/cheesecake.jpg" alt="Cheesecake" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Brownie com Calda de Nutella</h4>
                    <p className={style.ingredients}>Quentinho e acompanha sorvete</p>
                </div>
                <span>
                    <img src="/images/sobremesas/brownie.jpg" alt="Brownie" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Creme Brûlée com Baunilha</h4>
                    <p className={style.ingredients}>Creme francês com açúcar queimado</p>
                </div>
                <span>
                    <img src="/images/sobremesas/creme-brulee.jpg" alt="Creme Brûlée" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Mini Pudim de Leite Condensado</h4>
                    <p className={style.ingredients}>Porção individual com calda de caramelo</p>
                </div>
                <span>
                    <img src="/images/sobremesas/pudim.jpg" alt="Pudim" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>

        </div>

                    {/* Categoria Bebidas */}
            <div className="category-container">
            <h3 className="category-title">🥤 Bebidas</h3>
            <div className="food-items">
                
                <div className={style.foodItem}>
                <div>
                    <h4>Refrigerante Lata (350ml)</h4>
                    <p className={style.ingredients}>Coca-Cola, Guaraná Antarctica, Fanta Laranja, Sprite</p>
                </div>
                <span>
                    <img src="/images/bebidas/refrigerante.jpg" alt="Refrigerante Lata" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Água Mineral</h4>
                    <p className={style.ingredients}>Com ou sem gás (500ml)</p>
                </div>
                <span>
                    <img src="/images/bebidas/agua.jpg" alt="Água Mineral" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Suco Natural (300ml)</h4>
                    <p className={style.ingredients}>Laranja, Uva, Abacaxi com Hortelã, Manga</p>
                </div>
                <span>
                    <img src="/images/bebidas/suco.jpg" alt="Suco Natural" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Suco Detox (300ml)</h4>
                    <p className={style.ingredients}>Couve, limão, gengibre e maçã</p>
                </div>
                <span>
                    <img src="/images/bebidas/detox.jpg" alt="Suco Detox" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Chá Gelado (500ml)</h4>
                    <p className={style.ingredients}>Limão ou Pêssego</p>
                </div>
                <span>
                    <img src="/images/bebidas/cha-gelado.jpg" alt="Chá Gelado" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Chá Quente (300ml)</h4>
                    <p className={style.ingredients}>Hortelã, Camomila ou Erva-Doce</p>
                </div>
                <span>
                    <img src="/images/bebidas/cha-quente.jpg" alt="Chá Quente" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Café Expresso</h4>
                    <p className={style.ingredients}>Grãos 100% arábica</p>
                </div>
                <span>
                    <img src="/images/bebidas/cafe.jpg" alt="Café Expresso" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Capuccino Cremoso</h4>
                    <p className={style.ingredients}>Com chocolate em pó ou canela</p>
                </div>
                <span>
                    <img src="/images/bebidas/capuccino.jpg" alt="Capuccino" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Cerveja Long Neck (355ml)</h4>
                    <p className={style.ingredients}>Heineken, Budweiser, Stella Artois</p>
                </div>
                <span>
                    <img src="/images/bebidas/cerveja.jpg" alt="Cerveja Long Neck" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Vinho Tinto Taça (180ml)</h4>
                    <p className={style.ingredients}>Chianti ou Merlot</p>
                </div>
                <span>
                    <img src="/images/bebidas/vinho-tinto.jpg" alt="Vinho Tinto" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Vinho Branco Taça (180ml)</h4>
                    <p className={style.ingredients}>Chardonnay ou Sauvignon Blanc</p>
                </div>
                <span>
                    <img src="/images/bebidas/vinho-branco.jpg" alt="Vinho Branco" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Spritz Italiano</h4>
                    <p className={style.ingredients}>Aperol com prosecco e soda</p>
                </div>
                <span>
                    <img src="/images/bebidas/spritz.jpg" alt="Spritz Italiano" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Água Tônica com Limão</h4>
                    <p className={style.ingredients}>Servida com gelo e rodelas de limão</p>
                </div>
                <span>
                    <img src="/images/bebidas/tonica.jpg" alt="Água Tônica" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

                <div className={style.foodItem}>
                <div>
                    <h4>Limonada Siciliana</h4>
                    <p className={style.ingredients}>Feita com limões frescos e hortelã</p>
                </div>
                <span>
                    <img src="/images/bebidas/limonada.jpg" alt="Limonada Siciliana" />
                </span>
                <div>
                    <button>Adicionar ao Carrinho</button>
                    <p id='preco'></p>
                </div>
                </div>

            </div>
            </div>

        </main>
    );
}

export default Main;
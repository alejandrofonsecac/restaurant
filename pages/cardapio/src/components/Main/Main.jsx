import React, { useRef, useEffect } from 'react';
import '../../../style/main.css';

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
                    className="container"
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
            <h3 className="category-title">🍕 Pizzas</h3>
            <div className="food-items">
                
                <div className="food-item">
                <h4 className="food-name">Margherita</h4>
                <p className="ingredients">Massa artesanal, molho de tomate italiano, mussarela de búfala, manjericão fresco, azeite extra virgem</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Pepperoni</h4>
                <p className="ingredients">Massa crocante, molho de tomate, mussarela, fatias generosas de pepperoni</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Frango com Catupiry</h4>
                <p className="ingredients">Massa bem passada, molho de tomate, mussarela, frango desfiado temperado, catupiry cremoso</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Calabresa</h4>
                <p className="ingredients">Molho de tomate, queijo mussarela, calabresa fatiada, cebola roxa, orégano</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Quatro Queijos</h4>
                <p className="ingredients">Queijo mussarela, parmesão, gorgonzola e catupiry sobre massa fina</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Portuguesa</h4>
                <p className="ingredients">Presunto, ovos, cebola, azeitona, pimentão, molho e queijo mussarela</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Vegetariana</h4>
                <p className="ingredients">Abobrinha grelhada, berinjela, pimentões coloridos, cebola, tomate, molho e queijo</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Napolitana</h4>
                <p className="ingredients">Molho artesanal, queijo, tomate fresco, orégano, manjericão</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Toscana</h4>
                <p className="ingredients">Linguiça toscana artesanal, molho de tomate, mussarela, pimenta-do-reino</p>
                </div>
                
                <div className="food-item">
                <h4 className="food-name">Bella Speciale</h4>
                <p className="ingredients">Molho secreto da casa, presunto parma, rúcula, tomate seco, lascas de parmesão</p>
                </div>
                
            </div>
            </div>

        </main>
    );
}

export default Main;
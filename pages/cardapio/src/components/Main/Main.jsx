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

            

        </main>
    );
}

export default Main;
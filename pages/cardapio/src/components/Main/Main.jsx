import React, { useRef } from 'react';
import '../../../style/main.css';

function Main() {
    const containerRef = useRef(null);

    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let lastX;
    let momentumID;

    // Para a inércia
    const stopMomentum = () => {
        cancelAnimationFrame(momentumID);
    };

    // Função que cria o efeito de desaceleração
    const momentumScroll = () => {
        containerRef.current.scrollLeft += velocity;
        velocity *= 0.95; // fator de desaceleração (quanto menor, mais rápido para)
        if (Math.abs(velocity) > 0.2) {
            momentumID = requestAnimationFrame(momentumScroll);
        }
    };

    const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - containerRef.current.offsetLeft;
        scrollLeft = containerRef.current.scrollLeft;
        lastX = startX;
        stopMomentum();
    };

    const handleMouseLeave = () => {
        if (isDown) {
            isDown = false;
            momentumScroll();
        }
    };

    const handleMouseUp = () => {
        if (isDown) {
            isDown = false;
            momentumScroll();
        }
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        containerRef.current.scrollLeft = scrollLeft - walk;

        // Calcula velocidade para a inércia
        velocity = x - lastX;
        lastX = x;
    };

    return (
        <main>
            <menu>
                <div
                    className="container"
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="itens menuPrincipalMenu"><p>Menu Principal</p></div>
                    <div className="itens PizzasMenu"><p>Pizzas</p></div>
                    <div className="itens PratosExecutivos"><p>Pratos Executivos</p></div>
                    <div className="itens Porções"><p>Porções</p></div>
                    <div className="itens SemGluten"><p>Sem Glúten</p></div>
                    <div className="itens Sobremesas"><p>Sobremesas</p></div>
                    <div className="itens Bebidas"><p>Bebidas</p></div>
                </div>
            </menu>
        </main>
    );
}

export default Main;

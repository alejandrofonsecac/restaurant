import React, { useRef, useCallback } from 'react';
import style from '../style/main.module.css';

const CaroselMenu = ({ scrollToCategory, activeCategory }) => {
    const containerRef = useRef(null);
    const state = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        velocity: 0,
        lastX: 0,
        momentumID: null,
        lastTime: 0,
        dragThreshold: 5
    }).current;

    const stopMomentum = useCallback(() => {
        if (state.momentumID) {
            cancelAnimationFrame(state.momentumID);
            state.momentumID = null;
        }
    }, [state]);

    const momentumScroll = useCallback(() => {
        if (!containerRef.current) return;
        
        containerRef.current.scrollLeft += state.velocity;
        state.velocity *= 0.92;
        
        if (Math.abs(state.velocity) > 0.3) {
            state.momentumID = requestAnimationFrame(momentumScroll);
        } else {
            const container = containerRef.current;
            const itemWidth = 150 + 8;
            const snapPosition = Math.round(container.scrollLeft / itemWidth) * itemWidth;
            
            container.scrollTo({
                left: snapPosition,
                behavior: 'smooth'
            });
        }
    }, [state]);

    const handleDown = useCallback((clientX) => {
        state.isDown = true;
        const container = containerRef.current;
        if (!container) return;
        
        state.startX = clientX - container.getBoundingClientRect().left;
        state.scrollLeft = container.scrollLeft;
        state.lastX = state.startX;
        state.velocity = 0;
        state.lastTime = performance.now();
        stopMomentum();
        
        container.style.scrollSnapType = 'none';
        container.style.cursor = 'grabbing';
    }, [state, stopMomentum]);

    const handleMove = useCallback((clientX) => {
        if (!state.isDown || !containerRef.current) return;
        
        const container = containerRef.current;
        const x = clientX - container.getBoundingClientRect().left;
        const walk = (x - state.startX) * 2;
        
        requestAnimationFrame(() => {
            container.scrollLeft = state.scrollLeft - walk;
        });

        const now = performance.now();
        const deltaTime = now - state.lastTime;
        
        if (deltaTime > 0) {
            state.velocity = (walk - (state.lastX - state.startX)) / deltaTime * 16;
        }
        
        state.lastX = x;
        state.lastTime = now;
    }, [state]);

    const handleEnd = useCallback(() => {
        if (state.isDown) {
            state.isDown = false;
            
            const container = containerRef.current;
            if (container) {
                container.style.scrollSnapType = 'x mandatory';
                container.style.cursor = 'grab';
                momentumScroll();
            }
        }
    }, [state, momentumScroll]);

    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        handleDown(e.clientX);
    }, [handleDown]);

    const handleMouseMove = useCallback((e) => {
        handleMove(e.clientX);
    }, [handleMove]);

    const handleMouseUp = useCallback(() => {
        handleEnd();
    }, [handleEnd]);

    const handleTouchStart = useCallback((e) => {
        handleDown(e.touches[0].clientX);
    }, [handleDown]);

    const handleTouchMove = useCallback((e) => {
        handleMove(e.touches[0].clientX);
    }, [handleMove]);

    const handleTouchEnd = useCallback(() => {
        handleEnd();
    }, [handleEnd]);

    return (
        <menu>
            <div
                className={style.containerMenu}
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                style={{ cursor: 'grab' }}
            >
                <div 
                    className={`${style.itens} ${style.principalMenu} ${activeCategory === 'menu-principal' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('menu-principal')}
                >
                    <p>Menu Principal</p>
                </div>
                <div 
                    className={`${style.itens} ${style.PizzasMenu} ${activeCategory === 'pizzas' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('pizzas')}
                >
                    <p>Pizzas</p>
                </div>
                <div 
                    className={`${style.itens} ${style.pratosExecutivos} ${activeCategory === 'pratos-executivos' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('pratos-executivos')}
                >
                    <p>Pratos Executivos</p>
                </div>
                <div 
                    className={`${style.itens} ${style.porções} ${activeCategory === 'porcoes' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('porcoes')}
                >
                    <p>Porções</p>
                </div>
                <div 
                    className={`${style.itens} ${style.semGluten} ${activeCategory === 'sem-gluten' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('sem-gluten')}
                >
                    <p>Sem Glúten</p>
                </div>
                <div 
                    className={`${style.itens} ${style.sobremesas} ${activeCategory === 'sobremesas' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('sobremesas')}
                >
                    <p>Sobremesas</p>
                </div>
                <div 
                    className={`${style.itens} ${style.bebidas} ${activeCategory === 'bebidas' ? style.activeCategory : ''}`} 
                    onClick={() => scrollToCategory('bebidas')}
                >
                    <p>Bebidas</p>
                </div>
            </div>
        </menu>
    );
};

export default CaroselMenu;
import React, { useRef, useEffect } from "react";

const CarroselMenu = ({ children, onMouseDown, onMouseMove, onMouseUp, onMouseLeave, onTouchStart, onTouchMove, onTouchEnd }) => {
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
    state.velocity *= 0.6; // fator de desaceleração
    
    if (Math.abs(state.velocity) > 0.5) {
      state.momentumID = requestAnimationFrame(momentumScroll);
    } else {
      // Snap suave quando a velocidade for baixa
      const container = containerRef.current;
      const itemWidth = 150 + 8;
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

  const handleMouseDown = (e) => {
    handleDown(e.clientX);
    if (onMouseDown) onMouseDown(e);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
    if (onMouseMove) onMouseMove(e);
  };

  const handleTouchStart = (e) => {
    handleDown(e.touches[0].clientX);
    if (onTouchStart) onTouchStart(e);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
    if (onTouchMove) onTouchMove(e);
  };

  const handleTouchEnd = (e) => {
    handleEnd();
    if (onTouchEnd) onTouchEnd(e);
  };

  // Cleanup effect
  useEffect(() => {
    return () => {
      stopMomentum();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ 
        overflowX: 'hidden',
        cursor: 'grab',
        display: 'flex',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </div>
  );
};

export default CarroselMenu;
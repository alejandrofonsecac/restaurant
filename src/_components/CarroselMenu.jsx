import React, { useRef, useEffect } from "react";

const CarroselMenu = ({ children, onMouseDown, onMouseMove, onMouseUp, onMouseLeave, onTouchStart, onTouchMove, onTouchEnd }) => {
  const containerRef = useRef(null);
  
  const state = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    velocity: 0,
    lastX: 0,
    momentumID: null,
    lastTime: 0
  }).current;

  const stopMomentum = () => cancelAnimationFrame(state.momentumID);

  const momentumScroll = () => {
    containerRef.current.scrollLeft += state.velocity;
    state.velocity *= 0.6;
    if (Math.abs(state.velocity) > 0.5) {
      state.momentumID = requestAnimationFrame(momentumScroll);
    } else {
      const container = containerRef.current;
      const itemWidth = 150 + 8;
      const snapPosition = Math.round(container.scrollLeft / itemWidth) * itemWidth;
      container.scrollTo({ left: snapPosition, behavior: 'smooth' });
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
    const walk = (x - state.startX) * 1.5;
    container.scrollLeft = state.scrollLeft - walk;
    const now = performance.now();
    const deltaTime = now - state.lastTime;
    if (deltaTime > 0) state.velocity = (container.scrollLeft - (state.scrollLeft - walk)) / deltaTime * 16;
    state.lastX = x;
    state.lastTime = now;
  };

  const handleEnd = () => {
    if (state.isDown) {
      state.isDown = false;
      momentumScroll();
    }
  };

  useEffect(() => () => stopMomentum(), []);

  return (
    <div 
      ref={containerRef}
      onMouseDown={(e) => handleDown(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleDown(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      style={{ overflowX: 'hidden', cursor: 'grab', display: 'flex', whiteSpace: 'nowrap', margin: 'auto' }}
    >
      {children}
    </div>
  );
};

export default CarroselMenu;
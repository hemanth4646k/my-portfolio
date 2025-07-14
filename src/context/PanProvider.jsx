import React, { createContext, useContext, useRef } from "react";

const PanContext = createContext({
  panDeltaXRef: { current: 0 },
  handlePointerDown: () => {},
  handlePointerUp: () => {},
  handlePointerMove: () => {},
});

export const PanProvider = ({ children }) => {
  const panDeltaXRef = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    e.target.setPointerCapture(e.pointerId);
  };
  
  const handlePointerUp = (e) => {
    isDragging.current = false;
    e.target.releasePointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastX.current;
    panDeltaXRef.current += deltaX;
    lastX.current = e.clientX;
  };

  return (
    <PanContext.Provider
      value={{ panDeltaXRef, handlePointerDown, handlePointerUp, handlePointerMove }}
    >
      {children}
    </PanContext.Provider>
  );
};

export const usePan = () => useContext(PanContext);

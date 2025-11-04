import React, { ReactNode, useEffect, useState } from "react";

export const ScrollPositionContext = React.createContext({
  position: 0,
  handlePosition: (positionValue: number) => { },
});

interface ScrollPositionProviderProps {
  children: ReactNode;
}

const ScrollPositionProvider = ({ children }: ScrollPositionProviderProps) => {
  const [position, setPosition] = useState(0);

  const positionHandler = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", positionHandler);
  }, []);

  const value = {
    position,
    handlePosition: positionHandler,
  };

  return (
    <ScrollPositionContext.Provider value={value}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

export default ScrollPositionProvider;

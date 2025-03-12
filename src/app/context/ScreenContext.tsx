'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type ScreenContextType = {
  isMobile: boolean;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const isMobileScreen = window.outerWidth <= 500; // Set mobile breakpoint as needed
    console.log({ isMobileScreen });
    setIsMobile(isMobileScreen);
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = (): ScreenContextType => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};

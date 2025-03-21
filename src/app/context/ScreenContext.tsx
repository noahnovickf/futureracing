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
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth <= 500;
      setIsMobile(isMobileScreen);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

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

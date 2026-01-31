'use client';
import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  ReactNode,
} from 'react';

type ScreenContextType = {
  isMobile: boolean;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initialize with correct value if we're on the client
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 499px)').matches;
    }
    return false;
  });

  useLayoutEffect(() => {
    // Use matchMedia for more reliable responsive detection
    // This works better with browser dev tools device emulation
    const mediaQuery = window.matchMedia('(max-width: 499px)');
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Check immediately
    handleChange(mediaQuery);

    // Listen to media query changes (more reliable than resize events)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => {
        mediaQuery.removeListener(handleChange);
      };
    }
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

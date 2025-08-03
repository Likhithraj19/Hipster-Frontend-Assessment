import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type ThemeType, type ThemeConfig, THEMES } from '../types/theme';

interface ThemeContextType {
  currentTheme: ThemeType;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'themeswitcher-app-theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('minimal');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeType;
    if (savedTheme && THEMES[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const themeConfig = THEMES[currentTheme];
    const { className } = themeConfig;
    
    document.documentElement.classList.remove('theme-dark', 'theme-vibrant');
    
    if (className) {
      document.documentElement.classList.add(className);
    }
    
    document.documentElement.style.setProperty('--theme-transition-duration', themeConfig.animations.duration);
  }, [currentTheme]);

  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    
    localStorage.setItem(STORAGE_KEY, theme);
    
    setTimeout(() => {
      setCurrentTheme(theme);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 50);
  };

  const value: ThemeContextType = {
    currentTheme,
    themeConfig: THEMES[currentTheme],
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
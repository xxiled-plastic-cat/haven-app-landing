import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeName, defaultTheme, getThemeStyles } from '../lib/themes';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeStyles: React.CSSProperties;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load theme from localStorage on mount
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('haven-theme') as ThemeName;
      if (savedTheme && ['lightPink', 'terracotta', 'grey', 'obsidian'].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage when it changes
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem('haven-theme', theme);
    }
  }, [theme, isClient]);

  const themeStyles = getThemeStyles(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 
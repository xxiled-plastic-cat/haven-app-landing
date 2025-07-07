import { ReactNode, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { themeStyles } = useTheme();

  // Apply theme styles to body element
  useEffect(() => {
    const body = document.body;
    Object.entries(themeStyles).forEach(([key, value]) => {
      body.style.setProperty(key, value as string);
    });
    
    // Set background color on body
    body.style.backgroundColor = 'var(--bg-main)';
    
    return () => {
      // Cleanup on unmount
      Object.keys(themeStyles).forEach(key => {
        body.style.removeProperty(key);
      });
      body.style.removeProperty('background-color');
    };
  }, [themeStyles]);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundColor: 'var(--bg-main)',
        ...themeStyles
      }}
    >
      {children}

    </div>
  );
} 
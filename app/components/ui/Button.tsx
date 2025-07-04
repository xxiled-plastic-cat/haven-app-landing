import { motion } from 'framer-motion';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  style = {}
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseStyles = {
    primary: {
      backgroundColor: 'var(--text-header)',
      color: 'var(--bg-main)',
      boxShadow: '2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)'
    },
    secondary: {
      backgroundColor: 'var(--bg-lighter)',
      color: 'var(--text-header)',
      boxShadow: 'inset 2px 3px 4px rgba(0,0,0,0.1), inset -1.5px -2.5px 4px var(--bg-lighter)'
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-2xl font-medium transition-all duration-200 ${className}`}
      style={{
        ...baseStyles[variant],
        ...style
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: variant === 'primary' 
          ? '3px 4px 6px rgba(0,0,0,0.4), -2px -3px 6px var(--bg-lighter)'
          : 'inset 3px 4px 6px rgba(0,0,0,0.15), inset -2px -3px 6px var(--bg-lighter)'
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: variant === 'primary'
          ? 'inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)'
          : '2px 3px 4px rgba(0,0,0,0.2), -1.5px -2.5px 4px var(--bg-lighter)'
      }}
    >
      {children}
    </motion.button>
  );
} 
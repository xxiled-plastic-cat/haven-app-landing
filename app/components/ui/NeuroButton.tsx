import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeuroButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export default function NeuroButton({ 
  children, 
  size = 'md', 
  onClick, 
  className = '' 
}: NeuroButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  };

  const innerSizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const contentSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center ${className}`}
      style={{
        backgroundColor: 'var(--bg-main)',
        boxShadow: '2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)'
      }}
    >
      {/* Inner layer with opposite shadow */}
      <div
        className={`${innerSizeClasses[size]} rounded-full flex items-center justify-center`}
        style={{
          backgroundColor: 'var(--bg-main)',
          boxShadow: 'inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)'
        }}
      >
        {/* Content layer */}
        <div
          className={`${contentSizeClasses[size]} rounded-full flex items-center justify-center`}
          style={{
            backgroundColor: 'var(--bg-darker)',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center opacity-70"
            style={{
              backgroundColor: 'var(--bg-main)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.button>
  );
} 
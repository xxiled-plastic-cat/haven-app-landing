import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import Button from '../ui/Button';
import { scrollToEmailSignup } from '../../lib/utils';

export default function Hero() {
  const { theme } = useTheme();
  
  // Map themes to their corresponding mockup images
  const mockupImages = {
    lightPink: '/pink-mockup.png',
    terracotta: '/terracotta-mockup.png',
    grey: '/grey-mockup.png',
    obsidian: '/obsidian-mockup.png'
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 py-20 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6"
            style={{ color: 'var(--text-header)' }}
          >
            Save simply.{' '}
            <span className="block">Earn effortlessly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            style={{ color: 'var(--text-body)' }}
          >
            A modern way to grow your dollars with real yield—safe, simple, and automatic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="font-semibold"
              onClick={scrollToEmailSignup}
              style={{ 
                backgroundColor: 'var(--text-header)',
                color: 'var(--bg-main)'
              }}
            >
              Join the Waitlist
            </Button>
            {/* <Button
              variant="secondary"
              size="lg"
              className="font-semibold"
              style={{ 
                color: 'var(--text-header)',
                backgroundColor: 'var(--bg-lighter)'
              }}
            >
              Learn More
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Mobile Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <img
              src={mockupImages[theme]}
              alt="Haven mobile app mockup"
              className="w-96 md:w-[480px] lg:w-[520px] h-auto max-w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';
import { addToWaitlist } from '~/lib/supabase';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      await addToWaitlist(email);
      setStatus('success');
      setMessage('Thanks for joining our waitlist! We\'ll be in touch soon.');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      if (error.code === '23505') {
        setMessage('This email is already on our waitlist!');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
      console.error('Error adding to waitlist:', error);
    }
  };

  return (
    <motion.div
      id="email-signup"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <div 
        className="inline-block p-8 rounded-3xl max-w-md mx-auto"
        style={{ 
          backgroundColor: 'var(--bg-lighter)',
          boxShadow: '6px 6px 12px rgba(0,0,0,0.15), -3px -3px 8px var(--bg-main)'
        }}
      >
        <div className="mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ 
              backgroundColor: 'var(--bg-main)',
              boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px var(--bg-lighter)'
            }}
          >
            <EnvelopeIcon 
              className="w-8 h-8" 
              style={{ color: 'var(--text-header)' }}
            />
          </div>
          <h3 
            className="text-xl font-semibold mb-2"
            style={{ color: 'var(--text-header)' }}
          >
            Join the Waitlist
          </h3>
          <p 
            className="text-base"
            style={{ color: 'var(--text-body)' }}
          >
            Be the first to know when Haven launches and get early access.
          </p>
        </div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ 
                backgroundColor: 'var(--color-success)',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              <CheckIcon className="w-6 h-6 text-white" />
            </div>
            <p 
              className="text-sm font-medium"
              style={{ color: 'var(--color-success)' }}
            >
              {message}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-2xl border-0 text-base focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200"
                style={{ 
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-body)',
                  boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1), inset -1px -1px 2px var(--bg-lighter)',
                }}
                disabled={status === 'loading'}
              />
            </div>
            
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium"
                style={{ color: 'var(--color-error)' }}
              >
                {message}
              </motion.p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
              disabled={status === 'loading'}
              className="w-full px-6 py-3 rounded-2xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: 'var(--text-header)',
                color: 'var(--bg-main)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px var(--bg-main)'
              }}
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
} 
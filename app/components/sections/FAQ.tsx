import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FAQ_DATA } from '../../lib/constants';
import { cn } from '../../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold font-serif mb-6"
            style={{ color: 'var(--text-header)' }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-lg md:text-xl"
            style={{ color: 'var(--text-body)' }}
          >
            Got questions? We&apos;ve got answers. Find everything you need to know about Haven.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: 'var(--bg-main)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.1), -2px -2px 6px var(--bg-main)'
              }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <h3 
                  className="text-lg font-semibold pr-4"
                  style={{ color: 'var(--text-header)' }}
                >
                  {faq.question}
                </h3>
                <ChevronDownIcon 
                  className={cn(
                    "w-5 h-5 transition-transform duration-200 flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                  style={{ color: 'var(--text-body)' }}
                />
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="px-6 pb-6 border-t border-white/10"
                      style={{ backgroundColor: 'var(--bg-lighter)' }}
                    >
                      <p 
                        className="text-base leading-relaxed pt-4"
                        style={{ color: 'var(--text-body)' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="inline-block p-8 rounded-3xl"
            style={{ 
              backgroundColor: 'var(--bg-lighter)',
              boxShadow: '6px 6px 12px rgba(0,0,0,0.15), -3px -3px 8px var(--bg-main)'
            }}
          >
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: 'var(--text-header)' }}
            >
              Still have questions?
            </h3>
            <p 
              className="text-base mb-6"
              style={{ color: 'var(--text-body)' }}
            >
              Our team is here to help. Get in touch and we&apos;ll answer any questions you have.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-2xl font-semibold transition-all duration-200"
              style={{ 
                backgroundColor: 'var(--text-header)',
                color: 'var(--bg-main)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px var(--bg-main)'
              }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
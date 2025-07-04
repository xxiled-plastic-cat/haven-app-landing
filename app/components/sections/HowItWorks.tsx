import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon, 
  ArrowsRightLeftIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';
import { scrollToEmailSignup } from '../../lib/utils';

const steps = [
  {
    icon: CurrencyDollarIcon,
    title: 'Deposit Dollars',
    description: 'Connect your bank account and deposit USD with just a few taps. No crypto knowledge required.',
    step: '01'
  },
  {
    icon: ArrowsRightLeftIcon,
    title: 'Convert to xUSD',
    description: 'Your dollars are automatically converted to xUSD, our stable digital currency that maintains its value.',
    step: '02'
  },
  {
    icon: TrophyIcon,
    title: 'Earn Rewards',
    description: 'Your xUSD is put to work in secure DeFi strategies, earning you 3-5% annual yield automatically.',
    step: '03'
  }
];

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
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
            How It Works
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-body)' }}
          >
            Getting started with Haven is simple. Just three steps to start earning real yield on your savings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number Circle */}
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center z-10"
                style={{ 
                  backgroundColor: 'var(--bg-lighter)',
                  boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px var(--bg-main)'
                }}
              >
                <span 
                  className="text-sm font-bold"
                  style={{ color: 'var(--text-header)' }}
                >
                  {step.step}
                </span>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl h-full"
                style={{ 
                  backgroundColor: 'var(--bg-main)',
                  boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -4px -4px 12px var(--bg-main)'
                }}
              >
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: 'var(--bg-lighter)',
                    boxShadow: '4px 4px 8px rgba(0,0,0,0.15), -2px -2px 6px var(--bg-main)'
                  }}
                >
                  <step.icon 
                    className="w-8 h-8"
                    style={{ color: 'var(--text-header)' }}
                  />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl md:text-2xl font-bold font-serif mb-4"
                  style={{ color: 'var(--text-header)' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: 'var(--text-body)' }}
                >
                  {step.description}
                </p>
              </motion.div>

              {/* Connector Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--text-body)' }}
                  >
                    <div 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-2 border-b-2 border-t-transparent border-b-transparent"
                      style={{ borderLeftColor: 'var(--text-body)' }}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 -mx-4 md:-mx-8"
        >
          <div 
            className="rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
            style={{ 
              backgroundColor: 'var(--bg-lighter)',
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -4px -4px 12px var(--bg-main)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div 
                  className="aspect-video rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: 'var(--bg-main)',
                    boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.1), inset -2px -2px 6px var(--bg-lighter)'
                  }}
                >
                  <img 
                    src="/mockup-photo.png"
                    alt="Haven app interface mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 text-center lg:text-left"
              >
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-4"
                  style={{ color: 'var(--text-header)' }}
                >
                  Ready to start earning more on your savings?
                </h3>
                <p 
                  className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
                  style={{ color: 'var(--text-body)' }}
                >
                  Join thousands of users who are already growing their wealth with Haven's simple, secure platform.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToEmailSignup}
                  className="px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-200"
                  style={{ 
                    backgroundColor: 'var(--text-header)',
                    color: 'var(--bg-main)',
                    boxShadow: '4px 4px 8px rgba(0,0,0,0.2), -2px -2px 6px var(--bg-main)'
                  }}
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
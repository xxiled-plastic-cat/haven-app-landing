import { motion } from 'framer-motion';
import { COMPARISON_DATA } from '../../lib/constants';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function WhyHaven() {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
      ) : (
        <XMarkIcon className="w-6 h-6 text-red-500 mx-auto" />
      );
    }
    return value;
  };

  return (
    <section 
      id="why-haven"
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
            Why Choose Haven?
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-body)' }}
          >
            See how Haven compares to traditional savings accounts and why thousands are making the switch.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="rounded-3xl overflow-hidden"
            style={{ 
              backgroundColor: 'var(--bg-main)',
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -4px -4px 12px var(--bg-main)'
            }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
              <div></div>
              <div className="text-center">
                <h3 
                  className="text-lg font-semibold"
                  style={{ color: 'var(--text-header)' }}
                >
                  Traditional Savings
                </h3>
              </div>
              <div className="text-center">
                <h3 
                  className="text-lg font-semibold"
                  style={{ color: 'var(--text-header)' }}
                >
                  Haven
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            {COMPARISON_DATA.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors duration-200"
              >
                <div className="font-semibold" style={{ color: 'var(--text-header)' }}>
                  {row.feature}
                </div>
                <div 
                  className="text-center"
                  style={{ color: 'var(--text-body)' }}
                >
                  {renderValue(row.traditional)}
                </div>
                <div 
                  className="text-center font-semibold"
                  style={{ color: 'var(--color-success)' }}
                >
                  {renderValue(row.haven)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-center mt-6 opacity-70"
            style={{ color: 'var(--text-body)' }}
          >
            *Yields are variable and subject to market conditions. Past performance does not guarantee future results.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              title: 'Real Yield',
              description: 'Earn 3-5% annual yield through secure DeFi strategies',
              icon: '💰'
            },
            {
              title: 'Security First',
              description: 'Audited smart contracts and established protocols',
              icon: '🔒'
            },
            {
              title: 'Easy Access',
              description: 'Withdraw your funds instantly at any time',
              icon: '⚡'
            },
            {
              title: 'No Complexity',
              description: 'Simple interface, no crypto knowledge needed',
              icon: '✨'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl"
              style={{ 
                backgroundColor: 'var(--bg-lighter)',
                boxShadow: '4px 4px 8px rgba(0,0,0,0.15), -2px -2px 6px var(--bg-main)'
              }}
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-header)' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-body)' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
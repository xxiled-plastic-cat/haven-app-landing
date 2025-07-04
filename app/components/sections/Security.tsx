import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Audited Smart Contracts",
    description:
      "All smart contracts are thoroughly audited by leading security firms before deployment.",
  },
  {
    icon: BuildingLibraryIcon,
    title: "Established Protocols",
    description:
      "Your funds are secured through battle-tested DeFi protocols with proven track records.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 px-4 md:px-8">
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
            style={{ color: "var(--text-header)" }}
          >
            Security & Trust
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-body)" }}
          >
            Your security is our priority. Haven uses industry-leading security
            practices to protect your funds.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex items-start space-x-6 p-6 rounded-2xl shadow-neuro-light"
              style={{ backgroundColor: "var(--bg-lighter)" }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl shadow-neuro-light flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-main)" }}
              >
                <feature.icon
                  className="w-6 h-6"
                  style={{ color: "var(--text-header)" }}
                />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-header)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-body)" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >

        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-body)" }}
          >
            Haven is built on the foundation of trust, transparency, and
            security. Your peace of mind is our commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

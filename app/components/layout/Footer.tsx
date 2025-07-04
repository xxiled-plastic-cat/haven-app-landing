import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/haven-logo.png"
                alt="Haven Logo"
                className="h-8 w-auto pr-3"
              />
              <span
                className="text-2xl font-bold font-serif"
                style={{ color: "var(--text-header)" }}
              >
                Haven
              </span>
            </div>
            <p
              className="text-base mb-6 max-w-md"
              style={{ color: "var(--text-body)" }}
            >
              The easiest way to grow your savings with real yield. Save simply,
              earn effortlessly.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", href: "https://x.com/compxlabs" },
                { name: "Discord", href: "https://discord.gg/haven" },
                { name: "GitHub", href: "https://github.com/havenfinance" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl shadow-neuro-outset-light flex items-center justify-center hover:shadow-neuro-light transition-all duration-200"
                  style={{ backgroundColor: "var(--bg-lighter)" }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-header)" }}
                  >
                    {social.name[0]}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--text-header)" }}
            >
              Product
            </h3>
            <ul className="space-y-2">
              {["How it Works", "Security", "Pricing", "Roadmap"].map(
                (item) => (
                  <li key={item}>
                    <button
                      className="text-sm hover:opacity-70 transition-opacity text-left"
                      style={{ color: "var(--text-body)" }}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <p className="text-sm" style={{ color: "var(--text-body)" }}>
              © 2025 CompX Labs. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "var(--text-body)" }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p
              className="text-xs opacity-70 max-w-md"
              style={{ color: "var(--text-body)" }}
            >
              Haven is not a bank. Cryptocurrency investments are subject to
              market risk. Please invest responsibly.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

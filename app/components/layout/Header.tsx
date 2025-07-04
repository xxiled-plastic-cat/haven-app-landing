import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 backdrop-blur-md"
      style={{
        backgroundColor: "var(--bg-main)",
        opacity: 0.2,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <img src="/haven-logo.png" alt="Haven Logo" className="h-12 w-auto pr-3" />
          <span
            className="text-2xl font-bold font-serif"
            style={{ color: "var(--text-header)" }}
          >
            Haven
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-body)" }}
          >
            How It Works
          </a>
          <a
            href="#why-haven"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-body)" }}
          >
            Why Haven
          </a>
          <a
            href="#security"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-body)" }}
          >
            Security
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: "var(--text-body)" }}
          >
            FAQ
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </motion.header>
  );
}

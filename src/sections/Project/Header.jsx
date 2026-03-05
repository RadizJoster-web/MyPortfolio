import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-color-dark">
        My Project
      </h2>
    </motion.header>
  );
}

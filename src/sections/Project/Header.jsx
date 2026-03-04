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
      <h2 className="text-4xl md:text-5xl font-bold text-color-dark mb-4">
        Featured Works & Creations
      </h2>
      <div className="w-20 h-1.5 bg-color-primary mt-4"></div>
    </motion.header>
  );
}

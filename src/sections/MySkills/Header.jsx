import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
      whileInView={{ opacity: 1, y: 0 }} // Animasi saat di-scroll ke area ini
      viewport={{ once: true }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.6 }} // Durasi animasi
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-color-dark mb-4">
        My Skills
      </h2>
      <p className="text-justify lg:text-start text-gray-700 lg:max-w-2xl mx-auto">
        Explore my technical skills across different domains. Click on any
        category to see the specific technologies and tools I work with.
      </p>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <motion.h4
        initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6 }} // Durasi animasi
        className="text-center lg:text-start text-3xl md:text-4xl font-black text-color-dark uppercase tracking-tighter mb-2"
      >
        Get In Touch
      </motion.h4>

      <motion.p
        initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.1 }} // Durasi animasi
        className="text-gray-500 text-center lg:text-start"
      >
        I'm open to collaborations and new opportunities.
      </motion.p>
    </header>
  );
}

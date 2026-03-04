import { motion } from "framer-motion";

export default function Tech({ activeCategory }) {
  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-sm">
      <motion.h4
        initial={{ opacity: 0, y: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, y: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6 }} // Durasi animasi
        className="text-center text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest"
      >
        Technology Stack
      </motion.h4>

      <div className="flex flex-wrap justify-center gap-4">
        {activeCategory.techStack.map((tech, index) => (
          <motion.div
            initial={{ opacity: 0 }} // Posisi awal (tidak terlihat & agak ke bawah)
            whileInView={{ opacity: 1 }} // Animasi saat di-scroll ke area ini
            viewport={{ once: true }} // Animasi hanya berjalan sekali
            transition={{ duration: 0.6, delay: index * 0.1 }} // Durasi animasi
            key={tech}
            style={{ animationDelay: `${index * 50}ms` }}
            className="animate-in fade-in slide-in-from-bottom-2 duration-500 px-6 py-2 rounded-full border border-color-dark/30 text-color-dark font-medium hover:bg-color-dark hover:text-white transition-all cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

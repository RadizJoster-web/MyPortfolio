import { motion } from "framer-motion";

export default function CategorySkill({
  activeCategory,
  setActiveCategory,
  SKILL_CATEGORIES,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {SKILL_CATEGORIES.map((category, i) => (
        <motion.div
          initial={{ opacity: 0 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6, delay: i * 0.1 }} // Durasi animasi
          key={category.id}
          onClick={() => setActiveCategory(category)}
          className={`p-8 rounded-2xl text-center transition-all duration-300 border-2 flex flex-col items-center gap-4 group ${
            activeCategory.id === category.id
              ? "border-black bg-white shadow-xl scale-105"
              : "border-transparent bg-white/50 hover:bg-white hover:border-gray-200"
          }`}
        >
          <div
            className={`p-4 rounded-xl transition-colors ${
              activeCategory.id === category.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
            }`}
          >
            <category.icon className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {category.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{category.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

export default function HeaderAbout() {
  return (
    <header className="order-2 lg:order-1 space-y-8">
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6, delay: 0.1 }} // Durasi animasi
          className="text-5xl md:text-7xl font-black text-color-dark mb-6 tracking-tight"
        >
          Hello!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6, delay: 0.2 }} // Durasi animasi
          className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify md:text-start"
        >
          I am a <span className="font-bold">Full Stack Web Developer</span>{" "}
          passionate about building scalable web applications and exploring
          machine learning. I'm a student from{" "}
          <span className="font-bold">University Budiluhur</span> learning and
          growing in both fields, combining my interest in frontend and backend
          technologies with data science and AI. My goal is to create
          intelligent, user-friendly solutions that make a real impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6, delay: 0.3 }} // Durasi animasi
          className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify md:text-start"
        >
          I love solving complex problems through code and discovering patterns
          in data. Whether it's developing responsive web interfaces or training
          ML models, I'm dedicated to expanding my skills and delivering quality
          work. Let's connect and build something amazing together!
        </motion.p>
      </div>
    </header>
  );
}

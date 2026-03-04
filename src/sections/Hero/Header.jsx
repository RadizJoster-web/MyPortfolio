import { Link } from "react-scroll";
import { motion } from "framer-motion";

import Button from "../../components/Button";

export default function Header() {
  return (
    <header className="lg:col-span-7 space-y-8">
      <div className="space-y-4 text-center md:text-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6 }} // Durasi animasi
          className="text-gray-500 uppercase tracking-[0.3em] text-sm font-medium"
        >
          Radiz Dirganta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
          whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
          viewport={{ once: true }} // Animasi hanya berjalan sekali
          transition={{ duration: 0.6, delay: 0.1 }} // Durasi animasi
          className="text-5xl md:text-7xl font-black text-color-dark mb-6 leading-[1.1] tracking-tight"
        >
          Let's Build Something{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-color-gray to-color-dark">
            Amazing
          </span>{" "}
          Together
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.2 }} // Durasi animasi
        className="text-lg md:text-xl text-color-dark max-w-2xl text-justify md:text-start leading-relaxed"
      >
        Hi, I'm Radiz Dirganta, a Full Stack Web Developer. I specialize in
        creating dynamic and responsive web applications using the latest
        technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.3 }} // Durasi animasi
        className="flex justify-center md:justify-start gap-4 pt-4"
      >
        <Link to="contact" smooth={true} duration={500} offset={-100}>
          <Button text="View Projects" />
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-100}>
          <Button text="Contact Me" />
        </Link>
      </motion.div>
    </header>
  );
}

import { motion } from "framer-motion";

import HeaderAbout from "./Header";
import ContactBox from "./ContactBox";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full lg:w-screen xl:w-full flex items-center justify-between"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">
        {/* KOLOM GAMBAR (Sekarang di kiri pada desktop) */}
        <div className="w-full lg:w-1/2 flex justify-center xl:justify-start">
          <div className="relative w-full max-w-sm md:max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
              whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
              viewport={{ once: true }} // Animasi hanya berjalan sekali
              transition={{ duration: 0.6 }} // Durasi animasi
              className="relative z-10 bg-color-dark p-4 rounded-3xl shadow-2xl"
            >
              {/* Dekorasi Lingkaran */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 bg-color-light rounded-full -z-10"></div>

              <img
                src="/about_picture.png"
                alt="Radiz"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
              />

              <ContactBox />
            </motion.div>
          </div>
        </div>

        {/* KOLOM TEKS (Sekarang di kanan pada desktop) */}
        <div className="w-full lg:w-300">
          <HeaderAbout />
        </div>
      </div>
    </section>
  );
}

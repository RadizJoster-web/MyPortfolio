import { motion } from "framer-motion";
import Header from "./Header";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-between"
    >
      <div className="w-full flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Kolom Kiri: Konten Teks */}
        <Header />

        {/* Kolom Kanan: Gambar Oval */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
            whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
            viewport={{ once: true }} // Animasi hanya berjalan sekali
            transition={{ duration: 0.6, delay: 0.2 }} // Durasi animasi
            className="relative w-full aspect-4/5 max-w-md"
          >
            <div className="w-full h-full rounded-[200px] overflow-hidden border-8 border-transparent shadow-2xl">
              <img
                src="/hero_picture.png"
                alt="Radiz Dirganta"
                className="w-full h-full md:min-w-100 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Dekorasi opsional: Lingkaran di belakang gambar */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[200px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

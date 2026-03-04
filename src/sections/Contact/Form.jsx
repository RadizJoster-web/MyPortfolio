import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Form() {
  return (
    <form action="" className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.2 }} // Durasi animasi
        className="flex flex-col gap-1"
      >
        <span className="text-[10px] uppercase font-bold text-black-400 ml-4 tracking-widest">
          Optional
        </span>
        <input
          type="email"
          placeholder="Your Email Address"
          id="email"
          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-color-primary focus:bg-white outline-none transition-all text-color-dark"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.3 }} // Durasi animasi
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-color-primary focus:bg-white outline-none transition-all text-color-dark"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1, x: 0 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.4 }} // Durasi animasi
      >
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-color-primary focus:bg-white outline-none transition-all text-color-dark resize-none"
        ></textarea>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }} // Posisi awal (tidak terlihat & agak ke bawah)
        whileInView={{ opacity: 1 }} // Animasi saat di-scroll ke area ini
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.6, delay: 0.5 }} // Durasi animasi
        className="flex items-center justify-center gap-3 w-full py-4 bg-color-dark text-white rounded-2xl font-bold hover:bg-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        onClick={() => alert("Sorry feature under development")}
      >
        Send Message
        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </form>
  );
}

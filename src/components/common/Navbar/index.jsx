import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi"; // Impor ikon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Data menu agar kode lebih bersih (DRY)
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "skill", to: "skill" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }} // Posisi awal (tidak terlihat & agak ke bawah)
      whileInView={{ opacity: 1, y: 0 }} // Animasi saat di-scroll ke area ini
      viewport={{ once: true }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.5 }} // Durasi animasi
      className="fixed top-0 left-0 w-full px-6 md:px-20 py-4 flex items-center justify-between z-50 bg-color-light backdrop-blur-md"
    >
      {/* Logo */}
      <h1 className="text-3xl font-bold text-color-dark">Radiz</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer text-color-dark hover:text-color-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-3xl text-color-dark focus:outline-none z-60"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed left-0 top-15 w-screen h-screen bg-color-light flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <h1 className="text-5xl font-bold text-color-dark">Menu</h1>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={toggleMenu} // Tutup menu setelah klik
            className="text-2xl font-semibold text-color-dark hover:text-color-primary cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

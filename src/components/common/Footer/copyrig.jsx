import { FaHeart } from "react-icons/fa";

export default function Copyrigh() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Bagian Kiri: Copyright */}
      <div className="text-color-dark font-medium text-sm">
        © {currentYear} <span className="font-bold">Radiz Dirganta</span>. All
        rights reserved.
      </div>
    </div>
  );
}

import { FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function ContactBox() {
  return (
    <div className="bg-black text-white p-6 mt-0 rounded-3xl">
      <h1 className="text-xl mb-6 border-b border-white/10 pb-2">
        Let's Connect
      </h1>

      <div className="md:flex justify-between items-center grid grid-cols-2 lg:grid lg:grid-cols-2 gap-2 md:gap-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/radizslur/"
          target="_blank"
          className="group flex items-center gap-3 text-sm text-gray-400 hover:text-[#E1306C] transition-colors"
        >
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#E1306C]/10 transition-colors">
            <FaInstagram className="text-2xl md:text-lg" />
          </div>
          <span className="block md:hidden lg:block">Instagram</span>
        </a>

        {/* Twitter/X */}
        <a
          href="https://x.com/DirgantaRadiz"
          target="_blank"
          className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <FaTwitter className="text-2xl md:text-lg" />
          </div>
          <span className="block md:hidden lg:block">Twitter</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/RadizJoster-web"
          target="_blank"
          className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <FaGithub className="text-2xl md:text-lg" />
          </div>
          <span className="block md:hidden lg:block">GitHub</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6285782599453"
          target="_blank"
          className="group flex items-center gap-3 text-sm text-gray-400 hover:text-[#25D366] transition-colors"
        >
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#25D366]/10 transition-colors">
            <FaWhatsapp className="text-2xl md:text-lg" />
          </div>
          <span className="block md:hidden lg:block">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

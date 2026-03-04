import { Link } from "react-scroll";

import Copyrigh from "./copyrig";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "skill", to: "skill" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-4">
        <img src="/profile_picture.png" alt="Profile Picture" className="w-15" />

      <ul className="flex items-center gap-10">
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

      <Copyrigh />
    </footer>
  );
}

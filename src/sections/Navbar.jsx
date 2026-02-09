import { useState } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a 
            href="/" 
            className="text-white text-lg tracking-[0.25em] font-light uppercase hover:text-blue-400 transition-colors drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Hemanth Sai Somaraju
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-cyan-50 hover:text-cyan-200 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm tracking-wider font-medium uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden hover:text-blue-400 transition-colors focus:outline-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-black/95 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col p-5 gap-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
              className="text-white-50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-md transition-all text-lg font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

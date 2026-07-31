import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1e293b] border-b border-slate-700">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wider text-teal-400">
          Showrup
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-slate-300 font-medium">
          <a href="#skills" className="hover:text-teal-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-teal-400 transition">
            Projects
          </a>
          <a href="#research" className="hover:text-teal-400 transition">
            Research
          </a>
          <a href="#contact" className="hover:text-teal-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-slate-700">
          <div className="flex flex-col py-4">
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-slate-800"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-slate-800"
            >
              Projects
            </a>
            <a
              href="#research"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-slate-800"
            >
              Research
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 hover:bg-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
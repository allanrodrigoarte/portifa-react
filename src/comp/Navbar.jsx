import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="w-full bg-black py-0 px-4 fixed top-0 left-0 z-50 border-b border-white font-mono">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[80px]">

        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="block w-[120px] h-[80px]">
            <img
              src="/imgs/allan/ar-logo.svg"
              alt="Allan Rodrigo Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link
            to="/about"
            className="bg-neutral-900 border border-white text-white px-6 py-1 rounded hover:bg-neutral-700 font-bold text-lg transition-all"
          >
            About
          </Link>
          <Link
            to="/professionalexperience"
            className="bg-neutral-900 border border-white text-white px-6 py-1 rounded hover:bg-neutral-700 font-bold text-lg transition-all"
          >
            Experience
          </Link>
          <Link
            to="/projectx"
            className="bg-neutral-900 border border-white text-white px-6 py-1 rounded hover:bg-neutral-700 font-bold text-lg transition-all"
          >
            Project Grid
          </Link>
          <Link
            to="/timeline-grid"
            className="bg-neutral-900 border border-white text-white px-6 py-1 rounded font-bold text-lg hover:bg-neutral-700 transition-all shadow"
          >
            Timeline
          </Link>
          <Link
            to="/cont"
            className="bg-neutral-900 border border-white text-white px-6 py-1 rounded font-bold text-lg hover:bg-neutral-700 transition-all shadow"
          >
            Contact
          </Link>
        </div>

        {/* Right: CV Button (always visible) */}
        <div className="flex items-center gap-4">
          <a
            href="https://bit.ly/AR_Portf_2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-black text-white border-2 border-white px-6 py-1 rounded font-bold text-lg shadow hover:bg-white hover:text-black transition-all"
          >
            CHECK CV
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-white px-4 py-6 space-y-4 text-center">
          <Link to="/about" className="block text-white text-xl font-bold" onClick={() => setOpen(false)}>About</Link>
          <Link to="/timeline" className="block text-white text-xl font-bold" onClick={() => setOpen(false)}>Experience</Link>
          <Link to="/projectx" className="block text-white text-xl font-bold" onClick={() => setOpen(false)}>Project Grid</Link>
          <Link to="/timeline-grid" className="block text-white text-xl font-bold" onClick={() => setOpen(false)}>Timeline</Link>
          <Link to="/cont" className="block text-white text-xl font-bold" onClick={() => setOpen(false)}>Contact</Link>
          <a
            href="https://bit.ly/AR_Portf_2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black border-2 border-black px-6 py-1 rounded font-bold text-lg shadow hover:bg-black hover:text-white transition-all"
          >
            CHECK CV
          </a>
        </div>
      )}
    </nav>
  );
}

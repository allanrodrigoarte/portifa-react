import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const navLinkClass =
    "rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-[14px] font-medium tracking-[0.01em] text-white/90 transition-all duration-300 hover:-translate-y-[1px] hover:border-white/20 hover:bg-white/[0.05] hover:text-white";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5">
        {/* Left: Logo */}
        <Link to="/" className="block h-[76px] w-[116px] shrink-0">
          <img
            src="/imgs/allan/ar-logo.svg"
            alt="Allan Rodrigo Logo"
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.01]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 lg:flex font-sans">
          <Link to="/about" className={navLinkClass}>
            About
          </Link>
          <Link to="/professionalexperience" className={navLinkClass}>
            Experience
          </Link>
          <Link to="/projectx" className={navLinkClass}>
            Project Grid
          </Link>
          <Link to="/timeline-grid" className={navLinkClass}>
            Timeline
          </Link>
          <Link to="/cont" className={navLinkClass}>
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 font-sans">
          <a
            href="/imgs/cv/Senior_Graphic_Designer_Allan_Rodrigo.pdf"
            download="Senior_Graphic_Designer_Allan_Rodrigo.pdf"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-md border border-white/20 bg-white px-5 py-2 text-[14px] font-semibold tracking-[0.01em] text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-neutral-100 sm:inline-flex"
          >
            <span className="relative z-10">Download CV</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[2px]">
              ↗
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-[28px] text-white transition-transform duration-300 hover:scale-105 lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 lg:hidden font-sans">
          <div className="space-y-3 text-center">
            <Link
              to="/about"
              className="block rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              to="/professionalexperience"
              className="block rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              onClick={() => setOpen(false)}
            >
              Experience
            </Link>

            <Link
              to="/projectx"
              className="block rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              onClick={() => setOpen(false)}
            >
              Project Grid
            </Link>

            <Link
              to="/timeline-grid"
              className="block rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              onClick={() => setOpen(false)}
            >
              Timeline
            </Link>

            <Link
              to="/cont"
              className="block rounded-md border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <a
              href="/imgs/cv/Senior_Graphic_Designer_Allan_Rodrigo.pdf"
              download="Senior_Graphic_Designer_Allan_Rodrigo.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white px-5 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-neutral-100"
            >
              Download CV
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
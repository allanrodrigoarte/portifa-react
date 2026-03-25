import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/50 bg-black/95 px-4 py-0 font-mono backdrop-blur-sm">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="block h-[80px] w-[120px]">
            <img
              src="/imgs/allan/ar-logo.svg"
              alt="Allan Rodrigo Logo"
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/about"
            className="rounded-xl border border-white/60 bg-neutral-950 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-neutral-800"
          >
            About
          </Link>

          <Link
            to="/professionalexperience"
            className="rounded-xl border border-white/60 bg-neutral-950 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-neutral-800"
          >
            Experience
          </Link>

          <Link
            to="/projectx"
            className="rounded-xl border border-white/60 bg-neutral-950 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-neutral-800"
          >
            Project Grid
          </Link>

          <Link
            to="/timeline-grid"
            className="rounded-xl border border-white/60 bg-neutral-950 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-neutral-800"
          >
            Timeline
          </Link>

          <Link
            to="/cont"
            className="rounded-xl border border-white/60 bg-neutral-950 px-5 py-2 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-neutral-800"
          >
            Contact
          </Link>
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/imgs/cv/Senior_Graphic_Designer_Allan_Rodrigo.pdf"
            download="Senior_Graphic_Designer_Allan_Rodrigo.pdf"
            className="group relative hidden overflow-hidden rounded-xl border border-white bg-white px-6 py-2 text-lg font-bold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] sm:inline-block"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white transition-transform duration-300 hover:scale-110 focus:outline-none lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/50 bg-black px-4 py-6 text-center lg:hidden">
          <div className="space-y-3">
            <Link
              to="/about"
              className="block rounded-xl border border-white/20 bg-neutral-950 px-5 py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              to="/professionalexperience"
              className="block rounded-xl border border-white/20 bg-neutral-950 px-5 py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Experience
            </Link>

            <Link
              to="/projectx"
              className="block rounded-xl border border-white/20 bg-neutral-950 px-5 py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Project Grid
            </Link>

            <Link
              to="/timeline-grid"
              className="block rounded-xl border border-white/20 bg-neutral-950 px-5 py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Timeline
            </Link>

            <Link
              to="/cont"
              className="block rounded-xl border border-white/20 bg-neutral-950 px-5 py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <a
              href="/imgs/cv/Senior_Graphic_Designer_Allan_Rodrigo.pdf"
              download="Senior_Graphic_Designer_Allan_Rodrigo.pdf"
              className="group mt-4 inline-block rounded-xl border border-white bg-white px-6 py-3 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100"
            >
              <span className="flex items-center gap-2">
                Download CV
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
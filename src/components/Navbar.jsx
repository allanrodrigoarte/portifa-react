import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav className="w-full bg-black py-4 px-4 fixed top-0 left-0 z-50 border-b border-white font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Nome do lado esquerdo e links */}
        <div className="flex items-center gap-16">
          <span className="text-white font-extrabold text-xl tracking-widest select-none">
            Allan Rodrigo
          </span>
          <div className="flex gap-4">
            <Link
              to="/"
              className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
            >
              About
            </Link>
            <Link
              to="/timeline"
              className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
            >
              Experience
            </Link>
            <Link
              to="/projectx"
              className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
            >
              Project Grid
            </Link>
          </div>
        </div>
        {/* Botão à direita: Timeline */}
        <Link
          to="/timeline-grid"
          className="ml-8 bg-purple-600 border border-white text-white px-6 py-2 rounded font-bold text-lg hover:bg-purple-700 transition-all shadow"
        >
          Timeline
        </Link>
      </div>
    </nav>
  );
}

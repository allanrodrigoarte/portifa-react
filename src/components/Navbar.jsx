import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black py-4 px-4 flex justify-center gap-4 font-mono fixed top-0 left-0 z-50 border-b border-white">
      {/* Home */}
      <Link
        to="/"
        className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
      >
        Home
      </Link>
      {/* About */}
      <Link
        to="/about"
        className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
      >
        About
      </Link>
      {/* Timeline */}
      <Link
        to="/timeline"
        className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
      >
        Timeline
      </Link>
      {/* Projects Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all flex items-center gap-2"
          type="button"
        >
          Projects
          <span>▼</span>
        </button>
        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 mt-2 bg-neutral-900 border border-white rounded shadow-lg min-w-[180px] z-50 flex flex-col">
            <Link
              to="/projects/printi"
              className="px-4 py-2 text-white hover:bg-neutral-800 border-b border-white"
              onClick={() => setOpen(false)}
            >
              Printi
            </Link>
            <Link
              to="/projects/ggrebrand"
              className="px-4 py-2 text-white hover:bg-neutral-800 border-b border-white"
              onClick={() => setOpen(false)}
            >
              GG Rebrand
            </Link>
            <Link
              to="/projects/project2"
              className="px-4 py-2 text-white hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Project2
            </Link>
          </div>
        )}
      </div>
      {/* Contato */}
      <button
        className="bg-neutral-900 border border-white text-white px-6 py-2 rounded hover:bg-neutral-800 font-bold text-lg transition-all"
        type="button"
      >
        Contato
      </button>
    </nav>
  );
}

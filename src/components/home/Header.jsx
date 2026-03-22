import { Link } from "react-router-dom";
import { Download } from "lucide-react";

const navItems = [
  { label: "Cases", href: "#featured-cases" },
  { label: "About", href: "#about-preview" },
  { label: "Experience", href: "#credibility" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90"
        >
          Allan Rodrigo
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/files/allan-rodrigo-cv.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </div>
    </header>
  );
}
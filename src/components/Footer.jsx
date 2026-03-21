// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer({
  year = 2025,
  owner = "Allan Rodrigo",
  links = [
    { label: "Projects", to: "/projectx" },
    { label: "About", to: "/about" },
  ],
  sticky = false, // set true if you want it stuck to viewport bottom
}) {
  return (
    <footer
      aria-label="Site footer"
      className={[
        "w-full border-t-2 border-black bg-white text-black",
        "mt-10",
        sticky ? "fixed bottom-0 left-0 right-0" : "",
      ].join(" ")}
      style={{ boxShadow: "0 -3px 0 0 #000" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
          {/* Left: copyright */}
          <p className="text-sm sm:text-base font-mono text-center sm:text-left">
            © {year} · All rights reserved · Made in React by <span className="font-bold">{owner}</span>
          </p>

          {/* Right: quick links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-2 sm:gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="
                  px-3 py-1.5 border-2 border-black rounded-none font-bold
                  hover:bg-blue-900 hover:text-white hover:border-blue-900
                  focus:outline-none focus:ring-2 focus:ring-blue-800
                  active:scale-[0.99] transition
                "
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

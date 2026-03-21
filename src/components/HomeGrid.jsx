// src/components/HomeGrid.jsx
import { Link } from "react-router-dom";

const items = [
  {
    title: ["Logo", "&", "Branding"],
    image: "/imgs/t_cloud.png",
    link: "/branding",
  },
  {
    title: ["UX /Ui", "+", "Web3/ NFT"],
    image: "/imgs/t_ux.png",
    link: "/uxui",
  },
  {
    title: ["Animation", "&", "3D"],
    image: "/imgs/aspontas/estrela-logo.png",
    link: "/Animation",
  },
  {
    title: ["Sci Design", "&", "Data Viz"],
    image: "/imgs/t_sci.png",
    link: "/viz",
  },
];

export default function HomeGrid() {
  return (
    <div className="relative w-full">
      {/* container: single-row, responsive, snap scroll */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* hide scrollbar (webkit) */}
        <style>{`
          .flex::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            aria-label={item.title.join(" ")}
            className="
              group relative flex-none snap-start
              w-[85%] sm:w-[55%] md:w-[40%] lg:w-[28%] xl:w-[24%]
              h-56 md:h-64
              rounded-2xl overflow-hidden
              border border-white/15 bg-white/5
              transition-[transform,box-shadow,border-color] duration-300
              hover:-translate-y-0.5 hover:border-white/30
              "
          >
            {/* subtle glow stroke on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.15), inset 0 0 64px rgba(255,255,255,0.04)",
              }}
            />

            {/* image */}
            <img
              src={item.image}
              alt={item.title.join(" ")}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 scale-100 group-hover:scale-105"
              loading="lazy"
            />

            {/* dark gradient for legibility */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            />

            {/* title (keeps your mono typography) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center font-mono text-white text-lg md:text-xl leading-snug px-4">
              {item.title.map((line, i) => (
                <span key={i} className="drop-shadow-[0_1px_0_rgba(0,0,0,0.6)]">
                  {line}
                </span>
              ))}
            </div>

            {/* corner arrow cue */}
            <div className="absolute right-3 bottom-3 z-10">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white/90 transition group-hover:bg-white group-hover:text-black group-hover:border-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* edge fade masks for nicer scroll edges (optional, only on wide screens) */}
      <div
        aria-hidden
        className="pointer-events-none hidden md:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none hidden md:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent"
      />
    </div>
  );
}

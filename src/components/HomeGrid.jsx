import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Logo & Branding",
    subtitle: "Identity systems, campaigns and visual direction",
    image: "/imgs/t_cloud.png",
    link: "/branding",
  },
  {
    title: "UX/UI + Web3",
    subtitle: "Product flows, onboarding and token experiences",
    image: "/imgs/t_ux.png",
    link: "/uxui",
  },
  {
    title: "Animation & 3D",
    subtitle: "Motion visuals, NFT campaigns and storytelling",
    image: "/imgs/aspontas/estrela-logo.png",
    link: "/animation",
  },
  {
    title: "Sci Design & Data Viz",
    subtitle: "Scientific visuals, systems and information clarity",
    image: "/imgs/t_sci.png",
    link: "/viz",
  },
];

export default function HomeGrid() {
  return (
    <div className="relative w-full">
      <div
        className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="hide-scrollbar group relative flex-none snap-start w-[88%] sm:w-[62%] md:w-[44%] lg:w-[31%] xl:w-[24%] min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/80" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Explore
                </span>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div>
                <h3 className="max-w-[12ch] text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[28ch] text-sm leading-6 text-white/70">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#050505] to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-[#050505] to-transparent lg:block" />
    </div>
  );
}
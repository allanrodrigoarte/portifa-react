import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredCases = [
  {
    title: "gg.xyz",
    category: "Web3 / Product",
    description:
      "Tokenized communities, onboarding, dashboard thinking and retention-driven UX for gaming and crypto users.",
    image: "/imgs/ggbrand1.png",
    href: "/projects/ggtokenizedcommunity",
  },
  {
    title: "CSBL",
    category: "Scientific Design / Systems",
    description:
      "Scientific visuals, academic communication and complex information translated into clarity and credibility.",
    image: "/imgs/csbl/csbl-cover.png",
    href: "/projects/csbl",
  },
  {
    title: "Printi",
    category: "UX/UI / Product",
    description:
      "Led visuals for one of the biggest Web2Print products from scratch, contributing to a successful launch and later acquisition by Vistaprint.",
    image: "/imgs/printi/printi-cover.png",
    href: "/projects/printi",
  },
  {
    title: "Bsouro",
    category: "2018 Award Winner Video Art",
    description:
      "Authorial visual language connecting art, identity, storytelling and premium digital presentation.",
    image: "/imgs/bienal/bienal-cover.png",
    href: "/projects/bsouro",
  },
];

export default function FeaturedCases() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextProgress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
      setProgress(nextProgress);
    };

    const handleWheel = (event) => {
      const hasHorizontalOverflow = el.scrollWidth > el.clientWidth;
      if (!hasHorizontalOverflow) return;

      const isMostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (!isMostlyVertical) return;

      event.preventDefault();
      el.scrollBy({
        left: event.deltaY * 1.1,
        behavior: "smooth",
      });
    };

    updateProgress();
    el.addEventListener("scroll", updateProgress);
    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateProgress);

    return () => {
      el.removeEventListener("scroll", updateProgress);
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      id="featured-cases"
      className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24"
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/50">
            Featured cases
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            Work that shows strategy, craft and execution
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-white/60 md:text-base md:leading-7">
          A fast path for recruiters and clients to understand the depth of my
          work across Web3 products, interfaces, brand systems and visual
          storytelling.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="featured-cases-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
        >
          {featuredCases.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative min-h-[420px] w-[88%] flex-none snap-start overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:w-[70%] lg:w-[48%]"
            >
              <div className="flex h-full flex-col">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                      {item.category}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[42ch] text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90">
                    View Case
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Pretty progress bar */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/35">
            Scroll
          </span>

          <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 transition-[width] duration-200"
              style={{ width: `${Math.max(progress, 8)}%` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .featured-cases-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .featured-cases-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
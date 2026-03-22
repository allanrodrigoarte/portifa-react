import { Link } from "react-router-dom";

const works = [
  {
    title: "GG Tokenized Community",
    image: "/imgs/token-logo.png",
    tags: ["Product", "Web3", "UX"],
    href: "/projects/ggtokenizedcommunity",
  },
  {
    title: "gg.xyz Rebrand",
    image: "/imgs/gg-logo.png",
    tags: ["Branding", "System", "Creative Direction"],
    href: "/projects/ggrebrand",
  },
  {
    title: "NFT 3D Lore Cards",
    image: "/imgs/gcompass.png",
    tags: ["3D", "Campaign", "NFT"],
    href: "/projects/nftlorecards3d",
  },
  {
    title: "CSBL Scientific Design",
    image: "/imgs/csbl-logo.png",
    tags: ["Scientific Design", "Data Viz", "Branding"],
    href: "/projects/csbl",
  },
  {
    title: "Printi Launch → Success",
    image: "/imgs/printi-logo.png",
    tags: ["Branding", "Print", "Production"],
    href: "/projects/printi",
  },
  {
    title: "Bsouro",
    image: "/imgs/bienal-logo.png",
    tags: ["Art Direction", "Animation", "Authorial Work"],
    href: "/projects/bsouro",
  },
];

export default function SelectedWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/50">
            Selected work
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
            A broader view of the portfolio
          </h2>
        </div>

        <Link
          to="/projectx"
          className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          View Full Portfolio
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {works.map((work) => (
          <Link
            key={work.title}
            to={work.href}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="overflow-hidden border-b border-white/10 bg-black/30">
              <img
                src={work.image}
                alt={work.title}
                className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{work.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
// src/components/TimelineGrid.jsx
import { Link } from "react-router-dom";

const timelineData = [
  { year: "2012", projects: [{ name: "Printi Launch", slug: "printi" }] },
  { year: "2015", projects: [{ name: "Cocidade Festival", slug: "cocidade" }] },
  {
    year: "2020",
    projects: [
      { name: "CSBL Branding", slug: "csbl" },
      { name: "CSBL VACC game", slug: "vacc-game" },
    ],
  },
  {
    year: "2021",
    projects: [
      { name: "RODIN AI 3D Art", slug: "rodin" },
      { name: "CooperApiz Package", slug: "cooperapiz-package" },
    ],
  },
  {
    year: "2022",
    projects: [
      { name: "ggQuest Web3 MVP", slug: "ggrebrand" },
      { name: "PI’Y Brazil Nuts", slug: "pyy" },
      { name: "Virology Network", slug: "virologynetwork" },
    ],
  },
  {
    year: "2023",
    projects: [
      { name: "ggQuest UI", slug: "web3gamingux" },
      { name: "Raposinha 2D cut out animation", slug: "raposinha" },
      { name: "2D As Pontas de uma Estrela", slug: "umaestrela" },
    ],
  },
  {
    year: "2024",
    projects: [
      { name: "ggQuest LoreCards", slug: "nftlorecards3d" },
      { name: "ggQuest Guilds", slug: "ggtokenizedcommunity" },
      { name: "ggQuest Rebrand", slug: "ggrebrand" },
      { name: "CoopMak Package", slug: "coopmak-package" },
      { name: "Cassuvium 3D Animation", slug: "cassuvium" },
    ],
  },
  {
    year: "2025",
    projects: [
      { name: "ggQuest Token Launchpad", slug: "ggtokenizedcommunity" },
      { name: "Framer Landing Page", slug: "thegoldencompany" },
    ],
  },
];

export default function TimelineGrid() {
  return (
    <div className="w-full min-h-screen bg-neutral-100 font-mono">
      {/* Reserve space for your fixed navbar (adjust if your navbar height changes) */}
      <div className="h-[60px] sm:h-[70px]" />

      <main className="max-w-7xl mx-auto px-3 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Timeline
        </h1>

        {/* Single grid that remains in sync across breakpoints */}
        <div
          className="
            grid gap-3 sm:gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            2xl:grid-cols-8
          "
        >
          {timelineData.map((col) => (
            <section key={col.year} className="flex flex-col">
              {/* Year header */}
              <div className="bg-black text-white rounded-lg px-4 py-3 sm:py-4 text-center shadow">
                <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold">
                  {col.year}
                </span>
              </div>

              {/* Projects */}
              <ul className="mt-2 sm:mt-3 space-y-2">
                {col.projects.map((proj, i) => {
                  const [first, ...rest] = proj.name.split(" ");
                  const tail = rest.join(" ");
                  return (
                    <li key={i}>
                      <Link
                        to={`/projects/${proj.slug}`}
                        className="
                          group block w-full
                          rounded-xl border border-black bg-white
                          px-4 py-3 sm:py-4
                          shadow transition
                          focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2
                          hover:bg-blue-900 hover:text-white hover:border-blue-900
                          active:scale-[0.99]
                        "
                      >
                        <div className="flex flex-col leading-snug">
                          <span className="font-semibold text-base sm:text-lg">
                            {first}
                          </span>
                          {tail && (
                            <span
                              className="
                                text-sm sm:text-base opacity-80
                                group-hover:opacity-100
                                break-words
                              "
                            >
                              {tail}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Extra bottom padding so last row isn’t hidden behind fixed navs/OS bars */}
        <div className="pb-8 sm:pb-10" />
      </main>
    </div>
  );
}

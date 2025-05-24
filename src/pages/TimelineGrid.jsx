import { Link } from "react-router-dom";

const timelineData = [
  {
    year: "2012",
    projects: [{ name: "Printi Launch", slug: "printi" }],
  },
  {
    year: "2015",
    projects: [{ name: "Cocidade Festival", slug: "cocidade" }],
  },
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
      { name: "Virology Network", slug: "virologynetwork" }
    ],
  },
  {
    year: "2023",
    projects: [
      { name: "ggQuest UI", slug: "web3gamingux" },
      { name: "Raposinha 2D animation", slug: "raposinha" }
    ],
  },
  {
    year: "2024",
    projects: [
      { name: "ggQuest LoreCards", slug: "nftlorecards3d" },
      { name: "ggQuest Guilds", slug: "ggtokenizedcommunity" },
      { name: "ggQuest Rebrand", slug: "ggrebrand" },
      { name: "CoopMak Package", slug: "coopmak-package" },
    ],
  },
  {
    year: "2025",
    projects: [
      { name: "ggQuest Token Launchpad", slug: "ggtokenizedcommunity" },
      { name: "GoldenCompany Landing Page", slug: "thegoldencompany" },
    ],
  },
];

export default function TimelineGrid() {
  return (
    <div className="w-full min-h-screen py-6 bg-neutral-100 font-mono"> {/* py-12 -> py-6 */}
      <div className="max-w-7xl mx-auto px-2"> {/* px-4 -> px-2 */}
        <h1 className="text-4xl font-bold mb-5">Timeline</h1> {/* mb-10 -> mb-5 */}
        <div className="grid grid-cols-8 gap-2 mb-3"> {/* gap-4 -> gap-2, mb-6 -> mb-3 */}
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="bg-black text-white rounded-lg px-4 py-2 font-bold text-2xl flex items-center justify-center shadow text-center" // px-8 py-4 -> px-4 py-2
            >
              {item.year}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-2"> {/* gap-4 -> gap-2 */}
          {timelineData.map((item) => (
            <div key={item.year} className="flex flex-col gap-2"> {/* gap-4 -> gap-2 */}
              {item.projects.map((proj, i) => (
                <Link
                  to={`/projects/${proj.slug}`}
                  key={i}
                  className="bg-white border border-black rounded-xl px-3 py-2 hover:bg-blue-50 hover:border-blue-500 transition shadow text-left min-h-[55px] mb-1" // px-6 py-5 -> px-3 py-2, min-h-[90px] -> min-h-[55px], mb-2 -> mb-1
                >
                  <div className="font-semibold">
                    {proj.name.split(" ")[0]}
                  </div>
                  <div className="font-normal">
                    {proj.name.replace(proj.name.split(" ")[0], "").trim()}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// src/pages/TimelineGrid.jsx

import { Link } from "react-router-dom";

const timelineData = [
  {
    year: "2012",
    projects: [
      { name: "Printi Startup Launch", slug: "printi" },
    ],
  },
  {
    year: "2015",
    projects: [
      { name: "Festival Cocidade Event Production", slug: "cocidade" },
    ],
  },
  {
    year: "2020",
    projects: [
      { name: "CSBL Branding", slug: "csbl" },
      { name: "CSBL VACC game", slug: "vacc" }, // Adicione a página/slug se houver
    ],
  },
  {
    year: "2021",
    projects: [
      { name: "RODIN AI 3D Art", slug: "rodin" },
    ],
  },
  {
    year: "2022",
    projects: [
      { name: "ggQuest Web3 MVP", slug: "ggrebrand" },
    ],
  },
  {
    year: "2023",
    projects: [
      { name: "ggQuest UI for Questing", slug: "web3gamingux" },
    ],
  },
  {
    year: "2024",
    projects: [
      { name: "ggQuest LoreCards", slug: "nftlorecards3d" },
      { name: "ggQuest Guilds", slug: "ggtokenizedcommunity" },
      { name: "ggQuest Rebrand", slug: "ggrebrand" },
    ],
  },
  {
    year: "2025",
    projects: [
      { name: "ggQuest Token Launchpad", slug: "ggtokenizedcommunity" },
    ],
  },
];

export default function TimelineGrid() {
  return (
    <div className="w-full min-h-screen py-12 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-4 justify-start mb-6">
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="bg-black text-white rounded-lg px-8 py-4 font-bold text-2xl flex items-center justify-center min-w-[130px] shadow"
            >
              {item.year}
            </div>
          ))}
        </div>
        {/* Projeto em grid, organizado por ano */}
        <div className="flex gap-4">
          {timelineData.map((item) => (
            <div key={item.year} className="flex flex-col gap-4 flex-1">
              {item.projects.map((proj, i) => (
                <Link
                  to={`/projects/${proj.slug}`}
                  key={i}
                  className="bg-white border border-black rounded-xl px-6 py-5 mb-2 hover:bg-blue-50 hover:border-blue-500 transition shadow"
                  style={{ minHeight: 90 }}
                >
                  <div className="font-semibold">
                    {proj.name.split(" ")[0]}
                  </div>
                  <div className="font-normal">
                    {proj.name
                      .replace(proj.name.split(" ")[0], "")
                      .trim()}
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

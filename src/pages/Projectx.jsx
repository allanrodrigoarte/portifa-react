// src/pages/Projectx.jsx
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "printi",
    logo: "/imgs/printi-logo.png",
    name: "Printi: Launch → Success",
    company: "Printi.com.br",
    year: "2012–2015",
    skills: ["Branding", "Print Design"],
  },
  {
    slug: "ggrebrand",
    logo: "/imgs/gg-logo.png",
    name: "gg.xyz Rebrand",
    company: "gg.xyz",
    year: "2024",
    skills: ["Brand Strategy", "Mascot Design"],
  },
  {
    slug: "bsouro",
    logo: "/imgs/bienal-logo.png",
    name: "Bienal Naïfs do Brasil",
    company: "NFT4Artists",
    year: "2018",
    skills: ["2D Animation", "Storyboarding"],
  },
  {
    slug: "cocidade",
    logo: "/imgs/cocidade-logo.png",
    name: "COCIDADE Festival Campaign",
    company: "Anhangabaú, São Paulo",
    year: "2015–2016",
    skills: ["Branding", "Campaign Strategy"],
  },
  {
    slug: "csbl",
    logo: "/imgs/csbl-logo.png",
    name: "CSBL - Comp. Sys. Biology Lab",
    company: "USP",
    year: "2020–2022",
    skills: ["Branding", "Scientific Design"],
  },
  {
    slug: "ggtokenizedcommunity",
    logo: "/imgs/gg-logo.png",
    name: "GG Tokenized Community",
    company: "gg.xyz",
    year: "2024–2025",
    skills: ["Product Strategy", "Web3 UX"],
  },
  {
    slug: "nft4artists",
    logo: "/imgs/ethereumbrasil-logo.png",
    name: "NFT4Artists Hackathon",
    company: "Ethereum Brasil",
    year: "2022",
    skills: ["Prototyping", "Blockchain"],
  },
  {
    slug: "nftlorecards3d",
    logo: "/imgs/gg-logo.png",
    name: "NFT 3D Lore Cards",
    company: "gg.xyz",
    year: "2023–2024",
    skills: ["3D Animation", "Art Direction"],
  },
  {
    slug: "rnabook",
    logo: "/imgs/csbl-logo.png",
    name: "RNA Book - CRC Press",
    company: "USP",
    year: "2023–2024",
    skills: ["3D Illustration", "Molecular Viz"],
  },
  {
    slug: "rodin",
    logo: "/imgs/csbl-logo.png",
    name: "Rodin Thinking AI",
    company: "USP / CSBL",
    year: "2021",
    skills: ["Concept Art", "3D Modeling"],
  },
  {
    slug: "web3gamingux",
    logo: "/imgs/gg-logo.png",
    name: "Web3 Gaming UX/UI",
    company: "gg.xyz",
    year: "2022–2024",
    skills: ["UX Research", "Prototyping"],
  },
];

export default function Projectx() {
  return (
    <div className="w-full min-h-screen py-16 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-md w-full max-w-xs p-6 hover:shadow-xl transition-shadow duration-200 group cursor-pointer mx-auto"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="rounded-full w-[100px] h-[100px] object-contain border-2 border-gray-300 bg-white mb-4 group-hover:scale-105 transition-transform"
              />
              <div className="font-bold text-xl text-center mb-1">{p.name}</div>
              <div className="text-gray-500 text-center mb-1">{p.company}</div>
              <div className="text-sm text-gray-400 mb-3">{p.year}</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {p.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

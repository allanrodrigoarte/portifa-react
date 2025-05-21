import { useState, useMemo } from "react";
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
    slug: "ggtokenizedcommunity",
    logo: "/imgs/gg-logo.png",
    name: "GG Tokenized Community",
    company: "gg.xyz",
    year: "2024–2025",
    skills: ["Product Strategy", "Web3 UX"],
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
    slug: "nft4artists",
    logo: "/imgs/ethereumbrasil-logo.png",
    name: "NFT4Artists Hackathon",
    company: "Ethereum Brasil",
    year: "2022",
    skills: ["Prototyping", "Blockchain"],
  },
  {
    slug: "cocidade",
    logo: "/imgs/cocidade-logo.png",
    name: "COCIDADE Festival Campaign",
    company: "AHH! Agency",
    year: "2015–2016",
    skills: ["Branding", "Campaign Strategy"],
  },  
  {
    slug: "web3gamingux",
    logo: "/imgs/gg-logo.png",
    name: "Web3 Gaming UX/UI",
    company: "gg.xyz",
    year: "2022–2024",
    skills: ["UX Research", "Prototyping"],
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
    slug: "bsouro",
    logo: "/imgs/bienal-logo.png",
    name: "Bienal Naïfs do Brasil",
    company: "Special Mention",
    year: "2018",
    skills: ["2D Animation", "Storyboarding"],
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
    logo: "/imgs/rna-cover.png",
    name: "RNA Book - CRC Press",
    company: "USP",
    year: "2023–2024",
    skills: ["3D Illustration", "Molecular Viz"],
  },
  {
    slug: "rodin",
    logo: "/imgs/rodin-ai_cover.png",
    name: "Rodin Thinking AI",
    company: "USP / CSBL",
    year: "2021",
    skills: ["Concept Art", "3D Modeling"],
  },

];

// Utilitários
function getUnique(arr, key) {
  return [...new Set(arr.map((p) => (typeof key === "function" ? key(p) : p[key])))].filter(Boolean);
}
function flattenSkills(projects) {
  return [...new Set(projects.flatMap((p) => p.skills))];
}
function extractYears(projects) {
  const years = [];
  projects.forEach((p) => {
    const found = (p.year || "").match(/\d{4}/g);
    if (found) found.forEach((y) => years.push(y));
  });
  return [...new Set(years)].sort((a, b) => a - b);
}

export default function Projectx() {
  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [year, setYear] = useState("");

  const companies = getUnique(projects, "company");
  const skills = flattenSkills(projects);
  const years = extractYears(projects);

  // Handlers para garantir que só um filtro seja aplicado por vez
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
    setSkill("");
    setYear("");
  };
  const handleSkillChange = (e) => {
    setSkill(e.target.value);
    setCompany("");
    setYear("");
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setCompany("");
    setSkill("");
  };

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (!company || p.company === company) &&
          (!skill || p.skills.includes(skill)) &&
          (!year || (p.year && p.year.includes(year)))
      ),
    [company, skill, year]
  );

  return (
    <div className="w-full min-h-screen py-16 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        {/* Toolbar */}
        <div className="flex gap-8 items-center mb-10 border-2 border-black p-4 rounded-lg bg-white shadow-inner justify-center">
          <div className="flex items-center gap-2">
            <label className="font-bold text-black uppercase">Company:</label>
            <select
              className="border-2 border-black bg-white py-1 px-3 rounded-none text-lg font-mono outline-none"
              value={company}
              onChange={handleCompanyChange}
            >
              <option value="">All</option>
              {companies.map((c) => (
                <option value={c} key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-bold text-black uppercase">Skill:</label>
            <select
              className="border-2 border-black bg-white py-1 px-3 rounded-none text-lg font-mono outline-none"
              value={skill}
              onChange={handleSkillChange}
            >
              <option value="">All</option>
              {skills.map((s) => (
                <option value={s} key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-bold text-black uppercase">Year:</label>
            <select
              className="border-2 border-black bg-white py-1 px-3 rounded-none text-lg font-mono outline-none"
              value={year}
              onChange={handleYearChange}
            >
              <option value="">All</option>
              {years.map((y) => (
                <option value={y} key={y}>{y}</option>
              ))}
            </select>
          </div>
          <button
            className="ml-4 px-6 py-2 bg-black text-white border-2 border-black font-bold rounded-none hover:bg-neutral-900 transition"
            onClick={() => { setCompany(""); setSkill(""); setYear(""); }}
          >
            Reset
          </button>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className={`
                flex flex-col items-center
                bg-white border-2 border-black
                rounded-2xl w-full p-6
                group cursor-pointer
                transition-all duration-200
                hover:ring-4 hover:ring-[#b96aff] hover:z-10
                hover:scale-[1.03]
              `}
              style={{ boxShadow: "0 3px 0 0 #000" }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="rounded-full w-[100px] h-[100px] object-contain border-2 border-black bg-white mb-4 group-hover:scale-105 transition-transform"
              />
              <div className="font-extrabold text-xl text-center mb-2 text-gray-800">{p.name}</div>
              <div className="text-gray-600 text-center mb-1 font-mono">{p.company}</div>
              <div
                className="text-gray-700 text-center mb-4 font-bold tracking-widest"
                style={{ fontSize: "1.15rem" }}
              >
                {p.year}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {p.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded bg-blue-100 text-blue-800 font-bold border-2 border-black"
                    style={{ fontSize: "1.04rem" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-12 text-2xl font-bold">No projects found.</div>
        )}
      </div>
    </div>
  );
}
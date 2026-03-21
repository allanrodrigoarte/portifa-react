// src/components/Projectx.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// === data (unchanged) ===
const projects = [
  { slug: "thegoldencompany", logo: "/imgs/golden-company-logo.png", name: "The Golden Company", company: "gg.xyz", year: "2025", skills: ["Art Direction", "Framer Development"] },
  { slug: "ggtokenizedcommunity", logo: "/imgs/token-logo.png", name: "GG Tokenized Community", company: "gg.xyz", year: "2024–2025", skills: ["Product Strategy", "Web3 UX"] },
  { slug: "ggrebrand", logo: "/imgs/gg-logo.png", name: "gg.xyz Rebrand", company: "gg.xyz", year: "2024", skills: ["Branding", "Character Design"] },
  { slug: "web3gamingux", logo: "/imgs/uxui-logo.png", name: "UX/UI Web3 Gaming", company: "gg.xyz", year: "2022–2024", skills: ["Web3 UX", "Prototyping"] },
  { slug: "nftlorecards3d", logo: "/imgs/gcompass.png", name: "NFT 3D Lore Cards", company: "gg.xyz", year: "2023–2024", skills: ["3D Animation", "Art Direction", "NFT"] },
  { slug: "nft4artists", logo: "/imgs/eth/ethsp.png", name: "NFT4Artists Hackathon", company: "EthereumSP 2022 Hackathon", year: "2022", skills: ["Winner", "Blockchain", "NFT"] },
  { slug: "csbl", logo: "/imgs/csbl-logo.png", name: "Computational Systems Biology Lab", company: "CSBL-USP", year: "2020–2022", skills: ["Branding", "Scientific Design"] },
  { slug: "vacc-game", logo: "/imgs/vacc-logo.png", name: "VACC – Defeating the Coronavirus", company: "CSBL-USP", year: "2021", skills: ["Game Design", "Educational Game"] },
  { slug: "bsouro", logo: "/imgs/bienal-logo.png", name: "XIV Bienal Naïfs do Brasil 2018", company: "Sesc - São Paulo", year: "2018", skills: ["Art", "Special Mention"] },
  { slug: "virologynetwork", logo: "/imgs/virology-logo.png", name: "Virology Network", company: "CSBL-USP", year: "2022", skills: ["Data Visualization", "3D Animation"] },
  { slug: "rnabook", logo: "/imgs/rna/rna-art.png", name: "RnaBook – 3D", company: "CSBL-USP", year: "2023–2024", skills: ["3D Illustration", "Molecular Viz"] },
  { slug: "rodin", logo: "/imgs/rodin-ai_cover.png", name: "Rodin AI Thinking 3D Art", company: "CSBL-USP", year: "2021", skills: ["Concept Art", "3D Modeling"] },
  { slug: "printi", logo: "/imgs/printi-logo.png", name: "Printi: Launch → Success", company: "Printi.com.br", year: "2012–2015", skills: ["Branding", "Print Design"] },
  { slug: "cooperapiz-package", logo: "/imgs/cooperapiz-logo.png", name: "CooperApiz – Brand Design & Package", company: "Cooperativa Zoró", year: "2021", skills: ["Immersive Co-creation", "Cultural Branding"] },
  { slug: "coopmak-package", logo: "/imgs/coopmak-logo.png", name: "CoopMak – Brazil Nuts Brand & Package", company: "Cooperativa CoopMak", year: "2024", skills: ["Immersive Co-creation", "Cultural Branding"] },
  { slug: "pyy", logo: "/imgs/py-logo.png", name: "PI’Y Brazil Nuts", company: "Hodmedod’s (UK)", year: "2020–2023", skills: ["International Packaging", "Cultural Branding"] },
  { slug: "raposinha", logo: "/imgs/raposinha-logo.png", company: "Centro Universitário Senac", name: "Raposinha on the Rocks", year: "2023", skills: ["Short Animation", "2D Animation"] },
  { slug: "cocidade", logo: "/imgs/cocidade-logo.png", name: "COCIDADE Festival Campaign", company: "AHH! Agency", year: "2015–2016", skills: ["Branding", "Campaign Strategy"] },
  { slug: "umaestrela", logo: "/imgs/aspontas/estrela-logo.png", name: "As Pontas de Uma Estrela", company: "Centro Universitário Senac", year: "2023", skills: ["2D Animation", "Clip Studio Paint"] },
  { slug: "cassuvium", logo: "/imgs/cassuvium/cassuvium-logo.png", name: "Cassuvium", company: "Centro Universitário Senac", year: "2023", skills: ["3D Modeling", "Maya"] },
];

// utils
const getUnique = (arr, key) =>
  [...new Set(arr.map((p) => (typeof key === "function" ? key(p) : p[key])))].filter(Boolean);
const flattenSkills = (ps) => [...new Set(ps.flatMap((p) => p.skills))];
const extractYears = (ps) => {
  const years = [];
  ps.forEach((p) => {
    const found = (p.year || "").match(/\d{4}/g);
    if (found) found.forEach((y) => years.push(y));
  });
  return [...new Set(years)].sort((a, b) => a - b);
};

export default function Projectx() {
  const [company, setCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [year, setYear] = useState("");

  const companies = getUnique(projects, "company");
  const skills = flattenSkills(projects);
  const years = extractYears(projects);

  // enforce one-active filter
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
    <div className="w-full min-h-screen bg-neutral-100 font-mono">
      {/* space for fixed navbar */}
      <div className="h-[60px] sm:h-[70px]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Projects</h1>

        {/* Filters: stack on mobile, wrap on tablet/desktop */}
        <div
          className="
            sticky top-[60px] sm:top-[70px] z-30
            bg-white/90 backdrop-blur
            border-2 border-black rounded-xl shadow-inner
            p-3 sm:p-4 mb-6 sm:mb-8
          "
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <label className="font-bold text-black uppercase text-sm">Company</label>
              <select
                aria-label="Filter by company"
                className="border-2 border-black bg-white py-2 px-3 rounded-none text-base font-mono outline-none w-full sm:w-[220px] focus:ring-2 focus:ring-blue-800"
                value={company}
                onChange={handleCompanyChange}
              >
                <option value="">All</option>
                {companies.map((c) => (
                  <option value={c} key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <label className="font-bold text-black uppercase text-sm">Skill</label>
              <select
                aria-label="Filter by skill"
                className="border-2 border-black bg-white py-2 px-3 rounded-none text-base font-mono outline-none w-full sm:w-[220px] focus:ring-2 focus:ring-blue-800"
                value={skill}
                onChange={handleSkillChange}
              >
                <option value="">All</option>
                {skills.map((s) => (
                  <option value={s} key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <label className="font-bold text-black uppercase text-sm">Year</label>
              <select
                aria-label="Filter by year"
                className="border-2 border-black bg-white py-2 px-3 rounded-none text-base font-mono outline-none w-full sm:w-[160px] focus:ring-2 focus:ring-blue-800"
                value={year}
                onChange={handleYearChange}
              >
                <option value="">All</option>
                {years.map((y) => (
                  <option value={y} key={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="sm:ml-auto">
              <button
                type="button"
                aria-label="Reset filters"
                className="w-full sm:w-auto px-5 py-2 bg-black text-white border-2 border-black font-bold rounded-none hover:bg-blue-900 hover:border-blue-900 transition focus:ring-2 focus:ring-blue-800"
                onClick={() => {
                  setCompany("");
                  setSkill("");
                  setYear("");
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className="
                group relative flex flex-col items-center
                bg-white border-2 border-black rounded-2xl w-full
                p-4 sm:p-5
                transition-all duration-150
                hover:bg-blue-900 hover:text-white hover:border-blue-900
                focus:outline-none focus:ring-2 focus:ring-blue-800
                active:scale-[0.99]
              "
              style={{ boxShadow: "0 3px 0 0 #000" }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3 sm:mb-4 rounded-full border-2 border-black bg-white overflow-hidden">
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-center mb-1">{p.name}</h3>
              <p className="text-gray-700 group-hover:text-white/90 text-center mb-1 font-mono text-sm sm:text-base">
                {p.company}
              </p>
              <p className="text-gray-800 group-hover:text-white font-bold tracking-widest mb-3 sm:mb-4 text-base">
                {p.year}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {p.skills.map((s, i) => (
                  <span
                    key={i}
                    className="
                      px-2.5 py-1 rounded bg-blue-100 text-blue-900
                      group-hover:bg-white group-hover:text-blue-900
                      font-bold border-2 border-black text-[0.92rem] sm:text-[1.02rem]
                    "
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-10 sm:mt-12 text-xl sm:text-2xl font-bold">
            No projects found.
          </div>
        )}

        <div className="pb-10" />
      </div>
    </div>
  );
}

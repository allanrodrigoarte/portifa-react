import { Link } from "react-router-dom";

const projects = [
  {
    slug: "ggtokenizedcommunity",
    logo: "/imgs/token-logo.png",
    name: "GG Tokenized Community",
    company: "gg.xyz",
    year: "2024–2025",
    skills: ["Product Strategy", "Web3 UX"],
  },
  {
    slug: "web3gamingux",
    logo: "/imgs/uxui-logo.png",
    name: "UX/UI Web3 Gaming",
    company: "gg.xyz",
    year: "2022–2024",
    skills: ["Web3 UX", "Prototyping"],
  },
  {
    slug: "nftlorecards3d",
    logo: "/imgs/gcompass.png",
    name: "NFT 3D Lore Cards",
    company: "gg.xyz",
    year: "2023–2024",
    skills: ["3D Animation", "Art Direction", "NFT"],
  },
  {
    slug: "nft4artists",
    logo: "/imgs/eth/ethsp.png",
    name: "NFT4Artists Hackathon",
    company: "EthereumSP 2022 Hackathon",
    year: "2022",
    skills: ["Winner", "Blockchain", "NFT"],
  },
];

export default function Web3() {
  return (
    <div className="w-full min-h-screen py-16 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Web3 & Crypto Projects</h1>

        {/* Navegação entre categorias */}
        <nav className="flex justify-center gap-6 mb-10 font-bold text-lg">
          <Link to="/branding" className="hover:underline text-gray-600">Branding</Link>
          <Link to="/uxui" className="hover:underline text-gray-600">UX/UI</Link>
          <Link to="/web3" className="underline text-black">Web3 & Crypto</Link>
          <Link to="/viz" className="hover:underline text-gray-600">3D & DataViz</Link>
          <Link to="/animation" className="hover:underline text-black">Animation</Link>
        </nav>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className="flex flex-col items-center bg-white border-2 border-black rounded-2xl w-full p-6 group hover:ring-4 hover:ring-[#b96aff] hover:z-10 hover:scale-[1.03] transition-all duration-200"
              style={{ boxShadow: "0 3px 0 0 #000" }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="rounded-full w-[100px] h-[100px] object-contain border-2 border-black bg-white mb-4 group-hover:scale-105 transition-transform"
              />
              <div className="font-extrabold text-xl text-center mb-2 text-gray-800">{p.name}</div>
              <div className="text-gray-600 text-center mb-1 font-mono">{p.company}</div>
              <div className="text-gray-700 text-center mb-4 font-bold tracking-widest" style={{ fontSize: "1.15rem" }}>{p.year}</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {p.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-blue-100 text-blue-800 font-bold border-2 border-black text-sm">{skill}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

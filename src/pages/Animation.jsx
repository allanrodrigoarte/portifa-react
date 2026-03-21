import { Link } from "react-router-dom";

const projects = [
  {
    slug: "cassuvium",
    logo: "/imgs/cassuvium/cassuvium-logo.png",
    name: "Cassuvium – A Lenda Verde",
    company: "Senac",
    year: "2023",
    skills: ["3D Animation", "Cell Shading"],
  },
  {
    slug: "raposinha",
    logo: "/imgs/raposinha-logo.png",
    name: "Raposinha on the Rocks",
    company: "Centro Universitário Senac",
    year: "2023",
    skills: ["Short Animation", "2D Animation"],
  },
  {
    slug: "umaestrela",
    logo: "/imgs/aspontas/estrela-logo.png",
    name: "As Pontas de Uma Estrela",
    company: "Senac",
    year: "2023",
    skills: ["2D Animation", "Original Soundtrack"],
  },
  {
    slug: "rodin",
    logo: "/imgs/rodin-ai_cover.png",
    name: "Rodin AI Thinking 3D Art",
    company: "CSBL-USP",
    year: "2021",
    skills: ["Concept Art", "3D Modeling"],
  },
  {
    slug: "bsouro",
    logo: "/imgs/bienal-logo.png",
    name: "XIV Bienal Naïfs do Brasil 2018",
    company: "Sesc - São Paulo",
    year: "2018",
    skills: ["Art", "Special Mention"],
  },
];

export default function Animation() {
  return (
    <div className="w-full min-h-screen py-16 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Animation Projects</h1>

        {/* Navegação entre categorias */}
        <nav className="flex justify-center gap-6 mb-10 font-bold text-lg">
          <Link to="/branding" className="hover:underline text-gray-600">Branding</Link>
          <Link to="/uxui" className="hover:underline text-gray-600">UX/UI</Link>
          <Link to="/viz" className="hover:underline text-gray-600">3D & DataViz</Link>
          <Link to="/animation" className="underline text-black">Animation</Link>
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

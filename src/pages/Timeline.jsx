// src/pages/Timeline.jsx
import { Link } from "react-router-dom";

const items = [
  {
    logo: "/imgs/printi-logo.png",
    name: "Printi.com.br",
    period: "2012–2015",
    desc: ["Branding", "Print Skills"],
    link: "/projects/printi",
    linkText: "See project",
    bold: true,
  },
  {
    logo: "/imgs/ahh-logo.png",
    name: "AHH! Agency",
    period: "2015–2017",
    desc: ["Social Media", "Production Design"],
    link: "/projects/ahh",
    linkText: "See project",
    bold: true,
  },
  {
    logo: "/imgs/csbl-logo.png",
    name: "CSBL - Computational System Biology Lab - USP",
    period: "2020–2022",
    desc: ["Branding", "Academic Design"],
    link: "/projects/csbl",
    linkText: "See project",
    bold: false,
  },
  {
    logo: "/imgs/gg-logo.png",
    name: "gg.xyz",
    period: "2022–2025",
    desc: ["UX / UI Lead Designer", "Branding"],
    link: "/projects/ggxyz",
    linkText: "See project",
    bold: true,
  },
];

export default function Timeline() {
  return (
    <div className="w-full min-h-screen py-16 bg-white font-mono">
      <div className="max-w-5xl mx-auto px-4">
        {/* Linha timeline */}
        <div className="relative">
          {/* Linha central */}
          <div className="absolute top-16 left-0 w-full h-2 z-0 bg-gradient-to-r from-purple-600 via-purple-400 to-gray-200 rounded-full" />
          {/* Itens */}
          <div className="relative flex flex-row justify-between z-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-20 w-20 rounded-full object-contain bg-white border-2 border-gray-200 mb-2"
                  style={{ marginBottom: "24px", marginTop: "8px" }}
                />
                {/* Circulo timeline */}
                <div className="w-16 h-16 rounded-full border-4 border-purple-400 bg-white flex items-center justify-center z-10" style={{ marginBottom: "24px", marginTop: "-40px" }}></div>
                {/* Conteúdo */}
                <div className="flex flex-col items-center text-center min-h-[180px]">
                  <div className="font-bold text-xl mb-1">
                    {item.bold ? <strong>{item.name}</strong> : item.name}
                  </div>
                  <div className="text-gray-500 text-2xl mb-1">{item.period}</div>
                  <ul className="mb-2">
                    {item.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <Link
                    to={item.link}
                    className="text-purple-700 underline font-bold hover:text-purple-900"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

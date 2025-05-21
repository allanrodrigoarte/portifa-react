// src/pages/Timeline.jsx
import { Link } from "react-router-dom";

const items = [
  {
    logo: "/imgs/printi-logo.png",
    name: "Printi.com.br",
    period: "2012–2015",
    desc: [
      "Brand design",
      "Printing skills",
      "Packaging designs",
      "Prepress",
      "Production designer",
    ],
    link: "/projects/printi",
    linkText: "See project",
    bold: true,
  },
  {
    logo: "/imgs/ahh-logo.png",
    name: "AHH! Agency",
    period: "2015–2017",
    desc: [
      "Social media",
      "Production design",
      "Growth",
      "Brand design",
    ],
    link: "/projects/ahh",
    linkText: "See project",
    bold: true,
  },
  {
    logo: "/imgs/csbl-logo.png",
    name: (
      <>
        <span className="font-bold text-xl">CSBL</span>
        <br />
        <span className="text-base font-normal">
          Computational System Biology Lab - USP
        </span>
      </>
    ),
    period: "2020–2022",
    desc: [
      "Brand design",
      "Scientific design",
      "Scientific illustrations",
      "International team",
    ],
    link: "/projects/csbl",
    linkText: "See project",
    bold: false,
  },
  {
    logo: "/imgs/gg-logo.png",
    name: "gg.xyz",
    period: "2022–2025",
    desc: [
      "UX / UI",
      "Lead Designer",
      "Brand design",
      "Token Features",
      "Web3/ Crypto focused",
      "International team",
    ],
    link: "/projects/ggrebrand",
    linkText: "See projects",
    bold: true,
  },
];

export default function Timeline() {
  return (
    <div className="w-full min-h-screen py-16 bg-neutral-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logos row */}
        <div className="flex flex-row justify-between items-end mb-8 gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-[348px]">
              <div className="bg-white rounded-lg border border-gray-300 flex items-center justify-center h-[180px] w-full mb-4 shadow-sm">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="object-contain max-h-[90px] max-w-[200px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="relative h-12 mb-8 flex items-center">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-4 z-0">
            <div className="w-full h-2 bg-gradient-to-r from-gray-600 via-blue-400 to-gray-200 rounded-full"></div>
          </div>
          <div className="flex flex-row justify-between w-full relative z-10">
            {items.map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-[348px]"
              >
                <div className="w-12 h-12 rounded-full border-8 border-blue-400 bg-white shadow"
                  style={{ margin: "0 auto" }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards row */}
        <div className="flex flex-row justify-between gap-16">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-start w-[348px] min-h-[281px] h-[320px] p-6 rounded-lg border border-black bg-white gap-3"
              style={{
                boxShadow: "0 0 0 0 rgba(0,0,0,0.02)",
              }}
            >
              <div>
                <div className="font-bold text-xl mb-2">
                  {item.bold ? <strong>{item.name}</strong> : item.name}
                </div>
                <div className="italic text-lg text-gray-600 mb-4">{item.period}</div>
                <div>
                  {item.desc.map((d, i) => (
                    <div key={i} className="text-base leading-tight">
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to={item.link}
                className="text-gray-600 underline font-semibold hover:text-blue-900 mt-3"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

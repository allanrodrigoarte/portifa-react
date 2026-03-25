// src/pages/ProfessionalExperience.jsx
import Exp from "../components/Exp";
import { Helmet } from "react-helmet-async";

const experiences = [
  {
  logo: "/imgs/sabia/sabiachat2.png",
  company: "Hospital Israelita Albert Einstein",
  period: "2025–Present",
  role:
    "Product Designer & Front-End Developer on SabiaChat, a platform focused on combating health misinformation. Designed dynamic, data-driven interfaces and translated scientific content into accessible user experiences in collaboration with researchers.",
  skills: [
    "React, HTML & CSS",
    "MERN stack & APIs",
    "Dynamic JSON structures",
    "Database modeling",
    "UX for data systems",
  ],
  tags: ["HealthTech", "Research", "Data-driven", "Education", "Front-End"],
  link: "/projects/sabiachat",
  linkText: "See projects",
},
{
  logo: "/imgs/gg/gglogowhite.png",
  company: "gg.xyz",
  period: "2022–2025",
  role:
    "Lead Product Designer leading UI, art direction and design systems for a Web3 gaming platform. Managed a design team and owned end-to-end product experience including dashboards, onboarding and token-based community systems. Directed 3D/NFT asset production and created growth, retention and social media (Twitter) campaigns, combining product design, memes and visual storytelling.",
  skills: [
    "Product design (UX/UI)",
    "Design systems & tokens",
    "Design leadership",
    "Art direction",
    "3D & NFT asset production",
    "Figma libraries",
    "Prototyping & motion",
    "Crypto platforms & dashboards",
    "Community systems (guilds)",
    "Social media & meme design",
    "Growth & retention campaigns",
  ],
  tags: [
    "Web3",
    "Crypto",
    "NFT",
    "3D",
    "Gaming",
    "Communities",
    "Memes",
    "Product",
  ],
  link: "/projects/ggrebrand",
  linkText: "See projects",
},
  {
  logo: "/imgs/csbl-logo.png",
  company: (
    <>
      <span className="font-extrabold text-xl">CSBL</span>
      <br />
      <span className="text-base font-normal">
        Computational System Biology Lab – USP
      </span>
    </>
  ),
  period: "2020–2022",
  role:
    "Lead Designer for scientific communication and digital products. Created visual systems, scientific figures and data visualizations for research teams. Designed an educational game (VACC) for the COVID-19 vaccination campaign and supported lab materials, presentations and marketing assets.",
  skills: [
    "Scientific visualization",
    "Figures for research papers",
    "Game design & UI",
    "Data visualization",
    "Visual systems & identity",
    "Illustration for science",
    "Presentation & publications",
    "Marketing materials",
  ],
  tags: [
    "Science design",
    "Game design",
    "Scientific communication",
    "Vectorial Illustration",
    "Data visualization",
    "3D modeling",
    "3D animation",
    "Visual communication",
  ],
  link: "/projects/csbl",
  linkText: "See projects",
},
  {
  logo: "/imgs/allan/selfie.png",
  company: "Freelancer Product Designer",
  period: "2017–present",
  role:
    "Independent designer delivering end-to-end branding and visual systems for multiple clients. Created logos, brand identities, print materials and motion assets, with a strong focus on personal brands and digital creators. Managed projects from concept to final delivery, ensuring consistency and high-quality execution across all touchpoints.",
  skills: [
    "Brand identity systems",
    "Logo design",
    "Visual direction",
    "Print & editorial design",
    "Motion design & animation",
    "3D for products and branding",
    "Concept development",
    "Adobe Creative Suite",
  ],
  tags: [
    "Freelance",
    "Branding",
    "Personal brands",
    "Product Designer",
    "Creative direction",
    "Motion",
    "Print",
    "Visual design",
  ],
  link: "/projects/freelance",
  linkText: "See projects",
},
  {
  logo: "/imgs/ahh-logo.png",
  company: "AHH! Agency",
  period: "2015–2017",
  role:
    "Creative designer across social and growth campaigns, delivering brand assets, production design and motion. Worked on large-scale editorial and cultural projects including Guia ALSHOP 2016 (covering all shopping malls in Brazil), Brasilshop and Festival Cocidade (collaborative initiatives in São Paulo). Also contributed to design for animation and digital campaigns.",
  skills: [
    "Social media design",
    "Production design",
    "Brand assets & campaigns",
    "Editorial design",
    "Motion design & animation",
    "Creative direction support",
  ],
  tags: [
    "Campaigns",
    "Branding",
    "Editorial",
    "Motion Design",
    "Culture",
    "Community",
    "Performance",
  ],
  link: "/projects/ahh",
  linkText: "See projects",
},
  {
  logo: "/imgs/printi-logo.png",
  company: "Printi.com.br",
  period: "2012–2015",
  role:
    "Brand and production designer in a large-scale print environment. Worked on packaging, prepress workflows and advanced graphic processes. Supported marketing initiatives including trade show materials, remarketing campaigns, and ads for Google, Facebook and print. Focused on cost optimization, production efficiency and high-quality output.",
  skills: [
    "Packaging design",
    "Prepress & pre-imposition",
    "Advanced graphic production",
    "Print optimization & cost reduction",
    "Marketing materials (online & offline)",
    "Google & Facebook ads",
    "Brand & production design",
  ],
  tags: [
    "Print industry",
    "Packaging",
    "Production",
    "Marketing",
    "Ads",
    "Prepress",
    "Optimization",
  ],
  link: "/projects/printi",
  linkText: "See projects",
},
];

export default function ProfessionalExperience() {
  return (
    <div className="w-full min-h-screen bg-neutral-100 font-mono pb-24">
      <Helmet>
        <title>Professional Experience — Allan Rodrigo</title>
        <meta
          name="description"
          content="Professional experience of Allan Rodrigo — product design, web3 gaming, brand and scientific design. Reverse-chronological list with role, skills and tags."
        />
        <link rel="canonical" href="https://yourdomain.com/professional-experience" />
      </Helmet>

      <header className="max-w-7xl mx-auto px-4 pt-16 md:pt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Professional Experience
        </h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          A chronological view of my roles across startups, gaming and science. Each card
          highlights the company, period, role, core skills and topical tags.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-10 space-y-6 md:space-y-8">
        {experiences.map((exp, idx) => (
          <Exp key={idx} {...exp} />
        ))}
      </main>
    </div>
  );
}

// src/pages/ProfessionalExperience.jsx
import Exp from "../components/Exp";
import { Helmet } from "react-helmet-async";

const experiences = [
  {
    logo: "/imgs/gg-logo.png",
    company: "gg.xyz",
    period: "2022–2025",
    role:
      "Lead Product Designer across platform rebrand and web3 gaming features. Owned UI systems, design tokens, design ops and collaboration with crypto engineers.",
    skills: [
      "UX / UI",
      "Design systems & tokens",
      "Figma libraries",
      "Prototyping & motion",
      "Stakeholder communication",
    ],
    tags: ["Web3", "Gaming", "Blockchain", "NFT", "3D Animation"],
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
      "Designer for scientific communication: identity, complex data visualizations and illustration kits for international research teams.",
    skills: ["Brand design", "Scientific design", "Sci. illustrations", "Docs & templates"],
    tags: ["Academia", "Bio", "Visualization", "International team"],
    link: "/projects/csbl",
    linkText: "See project",
  },
  {
    logo: "/imgs/freelancer.png", // você pode criar um logo simples, ex: "Freelance" em texto ou ícone
    company: "Freelancer",
    period: "2017–2020",
    role:
      "Worked independently with multiple clients, delivering complete brand identities, stationary, and motion design. Specialized in logos for influencers and personal branding.",
    skills: ["Brand design", "Logo design", "Stationary", "Motion design"],
    tags: ["Freelance", "Branding", "Influencers", "Motion"],
    link: "/projects/freelance",
    linkText: "See project",
  },
  {
    logo: "/imgs/ahh-logo.png",
    company: "AHH! Agency",
    period: "2015–2017",
    role:
      "End-to-end creative for social and growth campaigns: production design, brand assets, and fast iteration for multiple clients.",
    skills: ["Social media", "Production design", "Growth", "Brand design"],
    tags: ["Campaigns", "Branding", "Performance"],
    link: "/projects/ahh",
    linkText: "See project",
  },
  {
    logo: "/imgs/printi-logo.png",
    company: "Printi.com.br",
    period: "2012–2015",
    role:
      "Brand and production designer for large-scale print runs. Packaging, prepress workflows and quality control across teams.",
    skills: ["Brand design", "Printing skills", "Packaging design", "Prepress"],
    tags: ["Industrial print", "Packaging", "Production"],
    link: "/projects/printi",
    linkText: "See project",
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

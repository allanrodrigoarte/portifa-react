import { Link } from "react-router-dom";

const tools = ["Figma", "React", "Tailwind", "Framer Motion", "Adobe CC"];
const expertise = [
  "UX Strategy",
  "Product Design",
  "Branding Systems",
  "Design Systems",
  "Web3 UX",
];
const industries = ["Gaming", "Crypto", "Research", "Education", "Creative Tech"];

export default function AboutPreview() {
  return (
    <section
      id="about-preview"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/50">
            About preview
          </p>
          <h2 className="mt-2 max-w-[14ch] text-3xl font-semibold tracking-tight md:text-5xl">
            A hybrid designer focused on systems, clarity and product impact
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            My background connects visual identity, UX strategy and digital
            product design. I’ve worked across branding, scientific design,
            interfaces and Web3 platforms, shaping experiences from concept to
            launch with a strong eye for hierarchy, usability and narrative.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            I’m especially interested in complex systems, trust-building
            onboarding, scalable design foundations and the point where design
            quality meets technical feasibility.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Read Full Profile
          </Link>
        </div>

        <div className="grid gap-4">
          <InfoBlock title="Tools" items={tools} />
          <InfoBlock title="Expertise" items={expertise} />
          <InfoBlock title="Industries" items={industries} />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, items }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/72"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
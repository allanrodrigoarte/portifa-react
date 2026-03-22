import { ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";

const stats = [
  { value: "12+", label: "Years designing digital products" },
  { value: "UI", label: "Interface design with strong hierarchy" },
  { value: "Web3", label: "Crypto-native UX and product flows" },
];

const tags = [
  "UI Design",
  "Web3 Interfaces",
  "Animation",
  "Product Strategy",
  "Design Systems",
  "Front-end Aware",
];

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
      <div className="flex flex-col justify-center">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
          <Sparkles className="h-3.5 w-3.5" />
          Product Designer • UX/UI • Web3
        </p>

        <h3 className="mt-3 max-w-[20ch] text-3xl font-semibold leading-[1] tracking-tight text-white md:text-5xl">
  Senior Product Designer.
  UX/UI systems, 3D, animation and Web3.
</h3>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
          I’m Allan Rodrigo, a Senior Product Designer focused on high-quality
          UI, crypto-native product experiences and visual storytelling.
            With a animation background, I bring motion to digital experiences.
          I design interfaces that balance clarity, identity and real
          product depth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#featured-cases"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-violet-100"
          >
            View Featured Cases
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#about-preview"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/14"
          >
            About Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/72"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40">
            <img
              src="/imgs/allan/allan_rodrigo_ui_designer_2026_branding.png"
              alt="Allan Rodrigo"
              className="h-[380px] w-full object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Layers3 className="h-4 w-4 text-violet-300" />
                Animation
              </div>
              <p className="mt-2 text-sm leading-6 text-white/68">
                3D, motion and storytelling for product and campaigns.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Code2 className="h-4 w-4 text-sky-300" />
                UI Design 
              </div>
              <p className="mt-2 text-sm leading-6 text-white/68">
                Clean interfaces with strong hierarchy and scalable systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <Sparkles className="h-4 w-4 text-pink-300" />
                Web3
              </div>
              <p className="mt-2 text-sm leading-6 text-white/68">
                Token flows, onboarding and trust-focused crypto UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
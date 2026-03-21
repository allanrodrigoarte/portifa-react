// src/pages/About.jsx
import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Code,
  Sparkles,
  Palette,
  Paintbrush,
  Gamepad2,
  Puzzle,
  BookOpenText,
  Music,
  Guitar,
  Clapperboard,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Helmet>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Enforce fonts + vertical rhythm */}
        <style>{`
          :root{
            --font-sans: 'Source Sans Pro', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
            --font-mono: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
            --leading-tight: 1.35;
            --leading-relaxed: 1.65;
          }
          body{ font-family: var(--font-sans); line-height: var(--leading-relaxed); }
          .font-sans-fixed{ font-family: var(--font-sans); }
          .font-mono-fixed{ font-family: var(--font-mono); }
          .leading-tight-fixed{ line-height: var(--leading-tight); }
          .leading-relaxed-fixed{ line-height: var(--leading-relaxed); }
        `}</style>
        <title>About — Allan Rodrigo</title>
        <meta
          name="description"
          content="Allan Rodrigo — Product Designer & Creative Technologist. 14+ years across UX/UI, brand, 3D, gaming and communities. Awards, metrics, skills, and personal hobbies."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 font-sans-fixed">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img
            src="/imgs/pfp-allan.jpeg"
            alt="Allan Rodrigo"
            className="w-52 h-52 object-cover rounded-2xl border-4 border-gray-200 shadow-xl mx-auto md:mx-0"
          />
          <div>
            <h1 className="text-5xl font-bold mb-3 leading-tight-fixed">Allan Rodrigo</h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed-fixed">
              Product Designer, Animator & Creative Technologist. Over 14 years crafting
              digital experiences at the intersection of{" "}
              <span className="font-semibold text-gray-900">design, 3D, gaming, and communities</span>.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 bg-black text-white rounded-xl text-sm">Design Leader</span>
              <span className="px-4 py-2 bg-gray-200 rounded-xl text-sm">Animator</span>
              <span className="px-4 py-2 bg-gray-200 rounded-xl text-sm">Creative Coder</span>
              <span className="px-4 py-2 bg-gray-200 rounded-xl text-sm">Web3 Explorer</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {[
            { n: "14+", label: "Years of Experience" },
            { n: "50+", label: "Projects Shipped" },
            { n: "10+", label: "Tech Companies & Startups" },
            { n: "3+", label: "Years in Web3 Gaming" },
            { n: "40+", label: "Designed logos" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <p className="text-4xl font-bold font-mono-fixed">{m.n}</p>
              <p className="text-sm text-gray-600 leading-tight-fixed">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Professional Journey */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 leading-tight-fixed">
            <Briefcase className="w-7 h-7" /> Professional Journey
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold leading-tight-fixed">
                Lead Product Designer — gg.xyz
              </h3>
              <p className="text-gray-700 leading-relaxed-fixed">
                Led UX/UI strategy and company rebrand for a Web3 gaming platform. Built
                scalable design systems, shipped NFT features and gamified flows, and
                orchestrated cross-functional rollout with product, marketing, and engineering.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-tight-fixed">
                Senior Academic Designer — CSBL / USP
              </h3>
              <p className="text-gray-700 leading-relaxed-fixed">
                Visual design for international research: identity, scientific visualization,
                and communication assets for papers, decks, and outreach.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-tight-fixed">
                Designer — Printi & AHH! Agency
              </h3>
              <p className="text-gray-700 leading-relaxed-fixed">
                Branding, production design, and growth content. Foundation in pre-press,
                packaging, and campaign delivery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-tight-fixed">
                Brand Designer — Freelancer
              </h3>
              <p className="text-gray-700 leading-relaxed-fixed">
                Independent work for startups and creators: complete identities, stationery,
                motion kits and influencer marks — <span className="font-mono-fixed">40+ designed logos</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Recognitions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 leading-tight-fixed">
            <Award className="w-7 h-7" /> Awards & Recognitions
          </h2>
          <ul className="grid md:grid-cols-3 gap-4 text-gray-800 leading-relaxed-fixed">
            <li className="rounded-xl border border-gray-200 p-4">
              🏆 Finalist — Prêmio Brasil Criativo (2022) with the game VACC
            </li>
            <li className="rounded-xl border border-gray-200 p-4">
              🥇 Winner — EthereumSP Hackathon (2022) for a Web3 app prototype
            </li>
            <li className="rounded-xl border border-gray-200 p-4">
              🎨 Special Mention — SESC SP Naïfs Biennial (2018) with original art
            </li>
          </ul>
        </div>

        {/* Skills Snapshot */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 leading-tight-fixed">
            <Code className="w-7 h-7" /> Skills Snapshot
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-2 text-gray-800 leading-relaxed-fixed">
              <li>UX/UI · Design Systems · Prototyping · Accessibility</li>
              <li>Web3 UX · Gamification · Token Features · Design Ops</li>
              <li>MERN · JavaScript/ES6 · Tailwind · Git/GitHub</li>
            </ul>
            <ul className="space-y-2 text-gray-800 leading-relaxed-fixed">
              <li>Figma · Adobe Suite · Blender · After Effects</li>
              <li>Motion & 3D for product storytelling</li>
              <li>Daily AI tooling to accelerate workflows</li>
            </ul>
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 leading-tight-fixed">
            <Sparkles className="w-7 h-7" /> Hobbies
          </h2>

          <motion.ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { Icon: Palette, label: "Art" },
              { Icon: Paintbrush, label: "Painting" },
              { Icon: Gamepad2, label: "Gaming" },
              { Icon: Puzzle, label: "Chess" },
              { Icon: BookOpenText, label: "Anime / Manga" },
              { Icon: Music, label: "Music" },
              { Icon: Guitar, label: "Guitar" },
              { Icon: Clapperboard, label: "Movies" },
            ].map(({ Icon, label }, i) => (
              <motion.li
                key={label}
                className="group relative rounded-2xl border border-gray-200 bg-white p-4 overflow-hidden"
                variants={fadeIn}
                custom={i}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {/* Glow border on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow:
                      "0 0 0 2px rgba(0,0,0,0.05), inset 0 0 64px rgba(0,0,0,0.04)",
                  }}
                />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                    <Icon className="w-5 h-5 text-gray-800" />
                  </div>
                  <span className="font-medium leading-tight-fixed">{label}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Final Call */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-3 leading-tight-fixed"
          >
            Let’s build something meaningful.
          </motion.h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed-fixed">
            I combine creativity, technical skills, and strategic thinking to deliver designs
            that look great and move metrics for companies and communities.
          </p>
        </div>
      </div>
    </div>
  );
}

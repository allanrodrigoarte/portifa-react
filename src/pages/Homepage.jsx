// src/pages/Homepage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Sparkles, Code2, Compass, Award, ArrowRight } from "lucide-react";
import HomeGrid from "../components/HomeGrid";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: "easeOut" } },
});

export default function Homepage() {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden">
      <Helmet>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Enforce fonts + vertical rhythm */}
        <style>{`
          :root{
            --font-sans: 'Source Sans Pro', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial;
            --font-mono: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',"Courier New", monospace;
            --leading-tight: 1.33;
            --leading-relaxed: 1.65;
          }
          body{ font-family: var(--font-sans); line-height: var(--leading-relaxed); }
          .font-sans-fixed{ font-family: var(--font-sans); }
          .font-mono-fixed{ font-family: var(--font-mono); }
          .leading-tight-fixed{ line-height: var(--leading-tight); }
          .leading-relaxed-fixed{ line-height: var(--leading-relaxed); }
        `}</style>
        <title>Allan Rodrigo — Portfolio</title>
        <meta
          name="description"
          content="Portfolio designed and built by Allan Rodrigo to tell his journey across UX/UI, branding, 3D, gaming and communities — crafted in React."
        />
      </Helmet>

      {/* Soft gradient + noise background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 0%, #7c3aed22, transparent 60%), radial-gradient(900px 500px at 80% 20%, #2563eb22, transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-25"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22><rect width=%224%22 height=%224%22 fill=%22%23000%22/><path d=%22M0 0L4 0 4 4%22 stroke=%22%23fff%22 stroke-opacity=%220.05%22/></svg>')",
        }}
      />

      {/* Main container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Narrative */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-mono-fixed">
                <Sparkles className="w-3.5 h-3.5" /> Portfolio v2025 — Professional Trajectory
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-3 text-3xl md:text-5xl font-regular text-white leading-tight-fixed"
            >
              Designed in React to
              <br />
              <span className="bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-violet-300 to-sky-300">
                tell my journey
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed-fixed max-w-xl"
            >
              I’m Allan Rodrigo — Product Designer, animator and creative coder. This portfolio
              is a panorama of branding, UX/UI and Web3 gaming work, crafted with React and
              a sprinkle of motion to turn projects into a story.
            </motion.p>

            {/* Badges */}
            <motion.div {...fadeUp(0.3)} className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl bg-white/10 text-white/90 border border-white/15 text-sm">
                14+ years · 50+ projects · <span className="font-mono-fixed">40+ designed logos</span>
              </span>
              <span className="px-4 py-2 rounded-xl bg-white/10 text-white/90 border border-white/15 text-sm">
                Web3 Gaming · Design Systems · Motion
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/professional-experience"
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-violet-100 transition"
              >
                Explore experience <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projectx"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl border border-white/15 hover:bg-white/15 transition"
              >
                Browse projects
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl border border-white/15 hover:bg-white/15 transition"
              >
                About & awards
              </Link>
            </motion.div>

            {/* Built-by statement */}
            <motion.div {...fadeUp(0.5)} className="mt-8">
              <div className="inline-flex items-center gap-2 text-white/70 text-sm font-mono-fixed">
                <Code2 className="w-4 h-4" />
                Designed & built by me — MERN + Tailwind + Framer Motion
              </div>
            </motion.div>
          </div>

          {/* Right: Portrait + glow card */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative mx-auto md:mx-0 w-full max-w-md"
          >
            <div className="rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-white">
                <img
                  src="/imgs/allan/allan_rodrigo_ui_designer_2026_branding.png"
                  alt="Allan Rodrigo"
                  className="w-full h-[320px] object-cover"
                />
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                  <p className="text-2xl font-bold text-white font-mono-fixed">14+</p>
                  <p className="text-xs text-white/70 leading-tight-fixed">Years in Digital Design</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                  <p className="text-2xl font-bold text-white font-mono-fixed">3+</p>
                  <p className="text-xs text-white/70 leading-tight-fixed">Years in Web3</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                  <p className="text-2xl font-bold text-white font-mono-fixed">40+</p>
                  <p className="text-xs text-white/70 leading-tight-fixed">Designed logos</p>
                </div>
              </div>

              {/* Awards preview */}
              <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-3">
                <div className="flex items-center gap-2 text-white">
                  <Award className="w-4 h-4 text-amber-300" />
                  <p className="text-sm leading-tight-fixed">
                    Awards: Prêmio Brasil Criativo (Finalist), EthereumSP Hackathon (Winner), SESC Naïfs (Special Mention)
                  </p>
                </div>
              </div>
            </div>

            {/* ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[28px] blur-3xl opacity-20"
              style={{
                background:
                  "linear-gradient(90deg, rgba(167,139,250,0.35), rgba(96,165,250,0.35))",
              }}
            />
          </motion.div>
        </div>

        {/* Panorama row (HomeGrid) */}
        <motion.section
          {...fadeUp(0.2)}
          className="mt-16 md:mt-24"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight-fixed flex items-center gap-2">
              <Compass className="w-6 h-6" /> Panorama
            </h2>
            <Link
              to="/projectx"
              className="text-white/80 hover:text-white inline-flex items-center gap-2 text-sm font-semibold"
            >
              See all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <HomeGrid />
        </motion.section>

        {/* Footer micro-credits */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-white/60 text-sm font-mono-fixed">
            © {new Date().getFullYear()} Allan Rodrigo — built with React, Tailwind and Framer Motion.
          </p>
        </div>
      </div>
    </div>
  );
}

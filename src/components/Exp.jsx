// src/components/Exp.jsx
import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Exp({
  logo,
  company,
  period,
  role,
  skills = [],
  tags = [],
  link,
  linkText = "See project",
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full rounded-2xl bg-gray-800 text-slate-50 shadow-md border border-transparent hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/40 transition-all duration-300"
      aria-label={`Experience at ${typeof company === "string" ? company : "company"}`}
    >
      <div className="grid grid-cols-12 gap-4 md:gap-6 p-4 md:p-6 lg:p-8 items-start">
        {/* Logo */}
        <div className="col-span-12 sm:col-span-3 md:col-span-2">
          <div className="aspect-[3/2] w-full rounded-lg bg-white border border-gray-200 overflow-hidden flex items-center justify-center">
            {logo ? (
              <img
                src={logo}
                alt={`${typeof company === "string" ? company : "Company"} logo`}
                className="object-contain w-full h-full p-2"
                loading="lazy"
              />
            ) : (
              <div
                aria-hidden
                className="w-full h-full bg-[linear-gradient(45deg,#e5e5e5_25%,transparent_25%,transparent_50%,#e5e5e5_50%,#e5e5e5_75%,transparent_75%,transparent)] bg-[length:16px_16px]"
              />
            )}
          </div>
        </div>

        {/* Company + period + role */}
        <div className="col-span-12 sm:col-span-9 md:col-span-4">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wide leading-snug">
            {company}
          </h3>
          <p className="text-slate-300 text-base md:text-lg mt-0.5">{period}</p>
          <p className="font-mono text-sm md:text-base mt-6 md:mt-7 tracking-wide">
            <span className="opacity-70">ROLE DESCRIPTION</span>
            <br />
            <span className="not-italic font-sans text-slate-50">{role}</span>
          </p>

          {link && (
            <div className="mt-5">
              <Link
                to={link}
                className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-2 decoration-slate-400 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
              >
                {linkText}
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path
                    d="M13 5l7 7-7 7M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="col-span-12 md:col-span-3">
          <h4 className="font-mono tracking-widest text-sm md:text-base text-slate-300">
            SKILLS
          </h4>
          <ul className="mt-3 space-y-1.5 text-sm md:text-base leading-6">
            {skills.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400 tabular-nums">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="col-span-12 md:col-span-3">
          <h4 className="font-mono tracking-widest text-sm md:text-base text-slate-300">
            TAGS
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <li
                key={i}
                className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-slate-700/40 border border-white/10"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(Exp);

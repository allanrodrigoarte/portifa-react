export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-black/60 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Let’s build something meaningful
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            Open to product design, UX/UI, branding systems and digital work
            where strategy, execution and visual quality need to move together.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-white/72">
          <a href="mailto:allan@example.com" className="transition hover:text-white">
            allan@example.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a href="/files/allan-rodrigo-cv.pdf" className="transition hover:text-white">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
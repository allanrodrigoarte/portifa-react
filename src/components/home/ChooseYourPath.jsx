import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    title: "Featured Cases",
    description:
      "Start with the strongest work and quickly understand my product and design approach.",
    href: "#featured-cases",
  },
  {
    title: "About Me",
    description:
      "See the profile behind the work, including background, approach and design perspective.",
    href: "#about-preview",
  },
  {
    title: "Full Portfolio",
    description:
      "Browse the broader collection of projects across branding, UX/UI, Web3 and visual design.",
    href: "/projectx",
  },
];

export default function ChooseYourPath() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.24em] text-white/50">
          Choose your path
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
          Navigate the portfolio your way
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {paths.map((item) => {
          const sharedClassName =
            "group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]";

          if (item.href.startsWith("#")) {
            return (
              <a key={item.title} href={item.href} className={sharedClassName}>
                <CardContent item={item} />
              </a>
            );
          }

          return (
            <Link key={item.title} to={item.href} className={sharedClassName}>
              <CardContent item={item} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function CardContent({ item }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition group-hover:bg-white group-hover:text-black">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
    </>
  );
}
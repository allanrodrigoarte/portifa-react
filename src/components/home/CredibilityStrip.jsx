const stats = [
  {
    value: "12+",
    label: "Years designing across branding, product and digital experiences",
  },
  {
    value: "Web3 + Product + Branding",
    label: "A rare mix of strategic, visual and technical thinking",
  },
  {
    value: "Design Leadership",
    label: "Led initiatives, systems and creative direction across teams",
  },
  {
    value: "Launch-minded",
    label: "From concept and story to interface and front-end reality",
  },
];

export default function CredibilityStrip() {
  return (
    <section
      id="credibility"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20"
    >
      <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.value + item.label}
              className="rounded-[24px] border border-white/10 bg-black/20 p-5"
            >
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
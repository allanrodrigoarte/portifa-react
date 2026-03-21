import ProjectTemplate from "../../components/ProjectTemplate";

export default function CoopMak() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/coopmak-logo.png"
        logoAlt="CoopMak Logo"
        siteUrl={null}
        title="CoopMak – Brazil Nuts Brand & Package"
        period="2024"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Create a cohesive brand identity and packaging for an indigenous cooperative, merging immersive design with authentic indigenous values and visual language."
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Facilitate dialogue and collaboration with indigenous communities, ensuring their cultural values and visual references were genuinely reflected in the brand and packaging."
            ],
          },
          {
            title: "Results",
            points: [
              "Developed a scalable visual identity and packaging line for retail, co-created with indigenous participation. The brand features vector art inspired by native graphics, with illustration direction by Yasmin Longatti.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Immersive branding process, indigenous co-creation, visual identity, packaging design, vector illustration, creative direction, collaborative design.",
            ],
          },
        ]}
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/coopmak/coopmak mockup.png"
          alt="CoopMak Brand – full package key visual"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. 1x3 square gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/imgs/coopmak/coopmak-logo-color.png" alt="CoopMak Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak-logo-bw.png" alt="CoopMak Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak-logo-gs.png" alt="CoopMak Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak_red.png" alt="CoopMak Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak_white.png" alt="CoopMak Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak_green.png" alt="CoopMak Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak-logo-color.png" alt="CoopMak Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/castanheira.png" alt="CoopMak Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/coopmak/coopmak-bw.png" alt="CoopMak Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>

        {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/coopmak/munduruku.png"
          alt="CoopMak Brand – full package key visual"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
        {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/coopmak/apiaka.png"
          alt="CoopMak Brand – full package key visual"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
        {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/coopmak/kayabi.png"
          alt="CoopMak Brand – full package key visual"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
    </>
  );
}

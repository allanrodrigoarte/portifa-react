import ProjectTemplate from "../../components/ProjectTemplate";

export default function Cooperapiz() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/cooperapiz-logo.png"
        logoAlt="CooperApiz Logo"
        siteUrl={null}
        title="CooperApiz – Brand Design & Package"
        period="2021"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Create a strong visual identity and packaging for an indigenous cooperative, using immersive design and authentic cultural elements from the Zoró people."
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Establish open dialogue with indigenous leaders to incorporate their cultural values and symbology, especially the iconic Zoró feather headdress, into the brand and packaging design."
            ],
          },
          {
            title: "Results",
            points: [
              "Developed a vector brand and packaging line, scalable for different product sizes and retail settings, co-created with indigenous participation and creative direction by Yasmin Longatti.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Immersive co-creation, cultural branding, vector illustration, packaging design, visual storytelling, creative/art direction, indigenous partnership.",
            ],
          },
        ]}
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/cooperapiz-featured.png"
          alt="CooperApiz full package key visual"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. 1x3 brutalist square gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/imgs/cooperapiz-gallery1.png" alt="Cooperapiz Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/cooperapiz-gallery2.png" alt="Cooperapiz Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/cooperapiz-gallery3.png" alt="Cooperapiz Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>
    </>
  );
}

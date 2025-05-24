import ProjectTemplate from "../../components/ProjectTemplate";

export default function TheGoldenCompany() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/golden-company-logo.png"
        logoAlt="The Golden Company"
        siteUrl="https://thegoldencompany.gg"
        title="The Golden Company – Landing Page"
        period="Framer Development – 2025"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Conceive and develop an engaging landing page for The Golden Company project, using an undersea theme as the central concept. Direct illustrator Lucas Tonon to create the visual assets and ensure a responsive experience across all devices."
            ],
          },
          {
            title: "Challenge:",
            points: [
              "2-week sprint for concept, art direction, and development. Achieve a smooth scrolling experience and impactful visual storytelling, integrating original illustrations and full responsiveness."
            ],
          },
          {
            title: "Results:",
            points: [
              "Landing page developed in Framer, combining exclusive illustrated assets and fluid navigation across all devices. The underwater visuals enhanced the guild’s storytelling, boosting community engagement.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Art Direction, Framer, Figma, UI/UX, Visual Storytelling, Responsive Design, Creative Project Management"
            ],
          },
        ]}
      />

      {/* Full width brutalist gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/tgc_mock_1.png"
          alt="Landing page hero - undersea concept and logo"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/tgc_mock_2.png"
          alt="The Golden Company title screen"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/tgc_mock_3.png"
          alt="Web3 cards showcase section"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/tgc_mock_4.png"
          alt="Deep ocean illustration by Lucas Tonon"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/tgc_mock_5.png"
          alt="Interactive scene with mascot and ocean elements"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>
    </>
  );
}

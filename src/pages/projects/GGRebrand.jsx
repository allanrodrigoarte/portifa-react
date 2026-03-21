import ProjectTemplate from '../../components/ProjectTemplate';

export default function GGRebrand() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/gg-logo.png"
        logoAlt="GG XYZ Logo"
        siteUrl="https://gg.xyz"
        title="ggQuest → gg.xyz Rebrand"
        period="2024"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Redefine gg.xyz’s identity for its shift from quest-based gaming to a tokenized community platform—playful, flexible, and instantly recognizable.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Break through the noisy Web3 space with a unique mascot-driven system that resonates with gamers and crypto users alike.",
            ],
          },
          {
            title: "Results",
            points: [
              'Allan Rodrigo originated the “GG” frog mascot concept and led the design process along with Lucas Tonon as Art Director to bring the character to life.',
            ],
          },
          {
            title: "Skills:",
            points: [
              "Character Design, Logo Design, Brand Strategy",
            ],
          },
        ]}
        images={[
          { src: "/imgs/gg-branding-concept.png", alt: "GG Branding Concept" },
          { src: "/imgs/gg-xyz-proccess.png", alt: "GG Brand Showcase" },
        ]}
      />

      {/* Full width branding image (outside ProjectTemplate gallery) */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/ggbrand1.png"
          alt="GG XYZ Brand Full Width"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>
        <img
          src="/imgs/ggbrand2.png"
          alt="GG XYZ Brand Full Width"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <div className="my-16"></div>
        <img
          src="/imgs/ggbrand3.png"
          alt="GG XYZ Brand Full Width"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>
    </>
  );
}

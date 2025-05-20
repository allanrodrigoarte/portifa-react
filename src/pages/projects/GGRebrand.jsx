import ProjectTemplate from '../../components/ProjectTemplate';

export default function GGRebrand() {
  return (
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
        { src: "/imgs/gg-logo-mockup1.png", alt: "GG Mascot Logo Mockup" },
        { src: "/imgs/gg-logo-mockup2.png", alt: "GG Brand Showcase" },
      ]}
    />
  );
}
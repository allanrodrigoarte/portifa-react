import ProjectTemplate from '../../components/ProjectTemplate';

export default function Bsouro() {
  return (
    <ProjectTemplate
      logo="/imgs/bienal-naifs-logo.png"
      logoAlt="Bienal Naïfs do Brasil Logo"
      siteUrl={null}
      title="Bienal Naïfs do Brasil (2018) Spetial mention"
      period="2018"
      summary="Special mention for the short film “Besouro Independente” at the 14th Bienal Naïfs do Brasil."
      details={[
        {
          title: "Goal:",
          points: [
            "Create an original animated short for the 14th Bienal Naïfs do Brasil art exhibition.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Complete a full animation project independently with limited resources.",
          ],
        },
        {
          title: "Results",
          points: [
            "Short film “Besouro Independente” earned a Featured Mention award at the Bienal.",
          ],
        },
        {
          title: "Skills:",
          points: [
            "2D animation, character design, storyboarding, Adobe After Effects. Video Mapping",
          ],
        },
      ]}
      images={[]}
    />
  );
}

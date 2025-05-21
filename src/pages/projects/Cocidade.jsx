import ProjectTemplate from '../../components/ProjectTemplate';

export default function Cocidade() {
  return (
    <ProjectTemplate
      logo="/imgs/cocidade-logo.png"
      logoAlt="COCIDADE Logo"
      siteUrl={null}
      title="COCIDADE Festival Campaign"
      period="2015,2016"
      summary="Anhagabaú, São Paulo."
      details={[
        {
          title: "Goal:",
          points: [
            "Developed the brand identity and communication materials for the 2015 COCIDADE Festival—designing posters, social media graphics, and short projection animations.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Led the briefing, art direction, and multi-format delivery, ensuring visual consistency across all touchpoints.",
          ],
        },
        {
          title: "Results",
          points: [
            "Attracted thousands of attendees across multiple activations, and delivered a unified festival identity that boosted community pride and visibility.",
          ],
        },
        {
          title: "Skills:",
          points: [
            "Branding & campaign strategy, print & digital production, illustration, motion graphics, crowdfunding messaging",
          ],
        },
      ]}
      images={[]}
    />
  );
}

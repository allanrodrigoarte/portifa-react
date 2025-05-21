import ProjectTemplate from '../../components/ProjectTemplate';

export default function Web3GamingUX() {
  return (
    <ProjectTemplate
      logo="/imgs/gg-logo.png"
      logoAlt="GG XYZ Logo"
      siteUrl={null}
      title="UX/UI from scratch – Web3 Gaming Product"
      period="2022–2024"
      summary={null}
      details={[
        {
          title: "Goal:",
          points: [
            "Lead end-to-end UX/UI for a new web3 gaming platform—full user journey from zero to MVP and scale.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Turn blockchain complexity into seamless, intuitive game flows for both crypto natives and newcomers.",
          ],
        },
        {
          title: "Results",
          points: [
            "Launched a live dApp with high user retention and strong onboarding metrics. Positive player feedback on usability.",
          ],
        },
        {
          title: "Skills:",
          points: [
            "Web3 UX, UI systems, onboarding, usability testing, Figma, prototyping, cross-functional delivery.",
          ],
        },
      ]}
      images={[]}
    />
  );
}

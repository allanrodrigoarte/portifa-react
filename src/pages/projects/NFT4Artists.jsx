import ProjectTemplate from '../../components/ProjectTemplate';

export default function NFT4Artists() {
  return (
    <ProjectTemplate
      logo="/imgs/ethereum-brasil-logo.png"
      logoAlt="Ethereum Brasil Logo"
      siteUrl={null}
      title="ETHEREUMSP 2022 HACKATHON – NFT4Artists Project"
      period="2022"
      summary="NFT4Artists Project – Winner"
      details={[
        {
          title: "Goal:",
          points: [
            "Prototype and pitch the NFT4Artists platform—an initiative to onboard traditional artists into the crypto market through accessible NFT tooling and community incentives.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Design, build, and present a fully viable MVP within a 48-hour hackathon. Combine UX thinking, blockchain fundamentals, and strong storytelling to stand out in a competitive web3 environment.",
          ],
        },
        {
          title: "Results",
          points: [
            "Won first place and a $500 prize at Ethereum São Paulo Hackathon, recognized for innovative onboarding of non-crypto creators. The project was highlighted for its impact, practicality, and market fit in the web3 creator ecosystem.",
          ],
        },
        {
          title: "Skills:",
          points: [
            "Rapid product prototyping, advanced UX/UI for web3, blockchain onboarding flows, community growth, MVP pitching, design sprints, and presentation to technical and non-technical audiences.",
          ],
        },
      ]}
      images={[]}
    />
  );
}

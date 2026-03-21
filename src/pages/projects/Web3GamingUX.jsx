import ProjectTemplate from '../../components/ProjectTemplate';

export default function Web3GamingUX() {
  return (
    <>
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
      />

      {/* Full width brutalist gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/notif.png"
          alt="Game landing on iMac"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/featurebrk.png"
          alt="Features breakdown section"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/journeymap.png"
          alt="Player journey map"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
    </>
  );
}

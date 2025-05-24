import ProjectTemplate from '../../components/ProjectTemplate';

export default function NFT4Artists() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/ethsp.png"
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
        images={[
          {
            src: "/imgs/ethsp1.jpg",
            alt: "Wireframe of the NFT4Artists onboarding experience",
          },
          {
            src: "/imgs/ethsp3.png",
            alt: "NFT4Artists UI mockups for the creator dashboard",
          },
        ]}
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/ethprize.png"
          alt="NFT4Artists winning the $500 prize at EthereumSP Hackathon 2022"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. Full width secondary image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/eth-team.png"
          alt="NFT4Artists project team – 3 participants after the final presentation"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 3. Brutalist square gallery 3x3 */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">NFT4Artists Gallery</h2>
        <div className="grid grid-cols-3 gap-6">
          <img src="/imgs/nft4a-1.png" alt="Gallery 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-2.png" alt="Gallery 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-3.png" alt="Gallery 3" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-4.png" alt="Gallery 4" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-5.png" alt="Gallery 5" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-6.png" alt="Gallery 6" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-7.png" alt="Gallery 7" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-8.png" alt="Gallery 8" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/nft4a-9.png" alt="Gallery 9" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>

      {/* 4. Full width third image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/nft4a-poster.png"
          alt="NFT4Artists poster or final key visual"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>
    </>
  );
}

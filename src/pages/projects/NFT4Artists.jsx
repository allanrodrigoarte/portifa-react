import { useEffect } from "react";
import ProjectTemplate from '../../components/ProjectTemplate';

export default function NFT4Artists() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <ProjectTemplate
        logo="/imgs/eth/ethsp.png"
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
            src: "/imgs/eth/ethsp1.jpg",
            alt: "Wireframe of the NFT4Artists onboarding experience",
          },
          {
            src: "/imgs/eth/ethsp3.png",
            alt: "NFT4Artists UI mockups for the creator dashboard",
          },
        ]}
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/eth/ethprize.png"
          alt="NFT4Artists winning the $500 prize at EthereumSP Hackathon 2022"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. Full width secondary image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/eth/eth-team.png"
          alt="NFT4Artists project team – 3 participants after the final presentation"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

     
    </>
  );
}

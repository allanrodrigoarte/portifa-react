import ProjectTemplate from '../../components/ProjectTemplate';

export default function GGTokenizedCommunity() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/gg-logo.png"
        logoAlt="GG XYZ Logo"
        siteUrl="https://gg.xyz"
        title="gg.xyz Tokenized Community"
        period="2024"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Architect and launch next-gen social layers for gg.xyz—enabling decentralized groups, token-gated feeds, and real-time content curation. Designed systems to drive engagement, increase token utility, and foster community governance through on-chain mechanics.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Unify web2 social dynamics with web3 infrastructure, ensuring seamless onboarding for non-crypto users while supporting advanced use-cases like permissionless group creation, XP rewards, and gasless content posting—all without compromising security or user experience.",
            ],
          },
          {
            title: "Results",
            points: [
              "Successfully shipped token-gated communities and feeds, leading to measurable growth in DAU (daily active users) and UGC (user-generated content). Enabled power users and DAOs to launch their own group economies, mint reputation tokens, and deploy native rewards. The system supported wallet and social login, with modular architecture for future dApp integrations.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Product strategy, web3 UX/UI, tokenomics for community, Figma prototyping, onboarding flows, smart contract integration, user retention mechanics, analytics for on-chain social, collaborative roadmap planning.",
            ],
          },
        ]}
      />

      {/* Full width brutalist gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        
        <img
          src="/imgs/cell-3-mock.png"
          alt="UX/UI dashboard mockup on Macbook"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
         <img
          src="/imgs/homemacbook.png"
          alt="UX/UI dashboard mockup on Macbook"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/macbook-token.png"
          alt="Game landing on iMac"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/chat_gg.png"
          alt="Chat UI mockup"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
    </>
  );
}

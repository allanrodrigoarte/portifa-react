import ProjectTemplate from '../../components/ProjectTemplate';

export default function NFTLoreCards3D() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/gg-logo.png"
        logoAlt="GG Quest Logo"
        siteUrl="https://opensea.io/collection/gg-quest-lore-cards-eth"
        title="NFT 3D Animation Production for Lore Cards"
        period="2023, 2024"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Collaborate with Art Director and Official Illustrator Lucas Tonon to transform his 2D lore card artworks into immersive 3D animated NFTs that deepen the game’s storytelling.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Preserve Tonon’s art style while optimizing high-quality animations for strict blockchain file-size and format constraints.",
            ],
          },
          {
            title: "Results",
            points: [
              "Launched a collectible NFT series and accompanying campaign page, boosting narrative immersion and community engagement.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "3D modeling & animation · Animation optimization for blockchain · Blender · After Effects · Collaborative art direction",
            ],
          },
        ]}
      />

      {/* Full width featured images */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/LoreCards/lorecards.png"
          alt="NFT Lore Cards 3D – featured animation"
          className="w-full rounded-lg border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/LoreCards/lorecards-frames.png"
          alt="NFT Lore Cards 3D – animation frames"
          className="w-full rounded-lg border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/LoreCards/lorecards-goldencompass.png"
          alt="NFT Lore Cards 3D – golden compass"
          className="w-full rounded-lg border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/LoreCards/lorecards-skystrife.png"
          alt="NFT Lore Cards 3D – skystrife"
          className="w-full rounded-lg border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 4x4 Brutalist Video Gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Lore Cards 3D Animated Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <video src="/imgs/LoreCards/vids/Goldencompass-120-56.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Apix-820-55.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Biome2-920-56.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Dear-1020-55.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Tcm-720-57.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Duper Lc 1-1220-53.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Duper Lc 2-1320-53.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Duper Lc 3-1420-53.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/E-Constellation-1520-55.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Gc-1620-58.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Long9s-320-54.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Mayg-420-55.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Skystrife1-520-56.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          <video src="/imgs/LoreCards/vids/Skystrife2-620-56.mp4" autoPlay loop muted playsInline className="rounded-lg bg-black border shadow w-full" />
          {/* Add more if needed */}
        </div>
      </div>
    </>
  );
}

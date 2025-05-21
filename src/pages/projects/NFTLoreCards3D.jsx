import ProjectTemplate from '../../components/ProjectTemplate';

export default function NFTLoreCards3D() {
  return (
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
      images={[
        // Inclua aqui o(s) caminho(s) das imagens do projeto
        // { src: "/imgs/lore-card-nft-1.png", alt: "Lore Card NFT Animation" },
      ]}
    />
  );
}

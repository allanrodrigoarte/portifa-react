import ProjectTemplate from '../../components/ProjectTemplate';

export default function RNABook() {
  return (
    <ProjectTemplate
      logo="/imgs/rna-logo.png" // Altere para o caminho do logo se desejar
      logoAlt="RNA Book Cover"
      siteUrl={null}
      title="RNA Book – CRC Press"
      period="2023, 2024"
      summary={null}
      details={[
        {
          title: "Goal:",
          points: [
            "Design a visually compelling 3D cover for a scientific book, using molecular visualization and protein modeling software to accurately illustrate an RNA structure. The aim was to blend scientific rigor with aesthetic innovation, making the content accessible and engaging for the academic and biotech communities.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Achieve precise scientific accuracy while creating an artistic, high-impact image under strict publishing guidelines. Integrated molecular data (PDB files), protein chains, and RNA strands into a seamless 3D composition—bridging the gap between hard science and visual storytelling.",
          ],
        },
        {
          title: "Results",
          points: [
            "The final cover was published by CRC Press, standing out for its clear communication of complex molecular themes. The work attracted recognition within both scientific and design circles, demonstrating the value of web3-inspired digital techniques (like NFT-style provenance and on-chain authenticity) in academic publishing.",
          ],
        },
        {
          title: "Skills:",
          points: [
            "3D illustration, protein and RNA visualization, molecular modeling (PyMOL, Blender), academic graphic design, Adobe Photoshop, visual storytelling for science, NFT/metadata best practices.",
          ],
        },
      ]}
      images={[
        { src: "/imgs/rna-book-cover.png", alt: "RNA Book Cover" }, // Altere ou adicione paths para imagens reais do projeto
      ]}
    />
  );
}

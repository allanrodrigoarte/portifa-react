import ProjectTemplate from '../../components/ProjectTemplate';

export default function RNABook() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/rna-logo.png"
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
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/rna-book-cover.png"
          alt="RNA Book Cover"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. 1x3 brutalist square gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/imgs/rna-gallery1.png" alt="RNA Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/rna-gallery2.png" alt="RNA Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/rna-gallery3.png" alt="RNA Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>
    </>
  );
}

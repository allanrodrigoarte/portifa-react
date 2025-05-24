import ProjectTemplate from '../../components/ProjectTemplate';
import LogoGallery from '../../components/LogoGallery';

export default function CSBL() {
  const csblLogos = [
    { src: "/imgs/logos/biofeats.png", label: "BioFeatS" },
    { src: "/imgs/logos/crowdnotation.png", label: "Crowdnotation" },
    { src: "/imgs/logos/scibooked.png", label: "SCI Booked" },
    { src: "/imgs/logos/Sii.png", label: "Systems Immunology of Inflammatory diseases" },
    { src: "/imgs/logos/fcoex.png", label: "FCO EX" },
    { src: "/imgs/logos/cpmedicine.png", label: "CPMedicine" },
    { src: "/imgs/logos/fcf_sustentavel.png", label: "FCF Sustentável" },
    { src: "/imgs/logos/its.png", label: "Instituto Todos pela Saúde" },
    { src: "/imgs/logos/vacc-logo-plain.png", label: "Game Vacc - Deafeating the Coronavirus" },
    { src: "/imgs/logos/fcf-2.png", label: "Faculdade de Ciências Farmacêuticas" },
    { src: "/imgs/logos/urutau.png", label: "Urutau Project" },
    { src: "/imgs/logos/digitalepidemiology.png", label: "Digital Epidemiology" },
  ];

  const squareImages = [
    { src: "/imgs/square/denv.png", label: "Denv Figure", alt: "Denv Figure" },
    { src: "/imgs/square/tsunamiofkowledge.png", alt: "Custom Chart Style for Academic Poster" },
    { src: "/imgs/square/3dvirusnet.png", alt: "Illustration for Scientific Article" },
    { src: "/imgs/square/virology-network-rev.png", alt: "Cover Design – Systems Biology Publication" },
    { src: "/imgs/square/lncrna.png", alt: "Vector Illustration – Immune Cell Interaction" },
    { src: "/imgs/square/rodin-csbl.png", alt: "Figure Highlight – Journal Submission" },
  ];

  return (
    <>
      <ProjectTemplate
        logo="/imgs/csbl-logo.png"
        logoAlt="CSBL Logo"
        siteUrl={null}
        title="CSBL - Computational Systems Biology Lab"
        period="2020–2022"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Provide design and branding support for a computational biology research lab.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Visualize complex scientific content in accessible, professional designs.",
            ],
          },
          {
            title: "Results",
            points: [
              "Established a cohesive lab identity and created educational media for research outreach.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Branding, graphic design, illustration, 3D modeling, presentation design, Book Cover Design",
            ],
          },
        ]}
        images={[]}
      />

      {/* Full width image gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/logos/csblredesign.png"
          alt="CSBL visual identity and scientific design work overview"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <img
          src="/imgs/logos/logos-csbl.png"
          alt="CSBL logo collection"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
        <img
          src="/imgs/logos/heart3D.png"
          alt="3D heart model created for CSBL"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>

      {/* Square image gallery (3 cols, brutalist style) */}
      <div className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-xl font-bold mb-6">Visual Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {squareImages.map((img, index) => (
            <div
              key={index}
              className="border border-black p-1 aspect-square flex items-center justify-center bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain max-h-full max-w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Logo gallery */}
      <LogoGallery logos={csblLogos} />
    </>
  );
}

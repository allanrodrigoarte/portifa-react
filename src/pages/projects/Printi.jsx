import ProjectTemplate from '../../components/ProjectTemplate';
import CardStack from '../../components/CardStack';



export default function Printi() {
  return (
    <div>
      <ProjectTemplate
        logo="/imgs/printi-logo.png"
        logoAlt="Printi Logo"
        siteUrl="https://printi.com.br"
        title="Printi: Launch → Success"
        period="2012-2015"
        summary={null}
        details={[
         {
  title: "Goal:",
  points: [
    "Establish Printi as a disruptive brand in the printing market by merging web2print technology, creative marketing, and a full brand redesign.",
  ],
},
{
  title: "Challenge:",
  points: [
    "Deliver design and production across digital, packaging, and print in a fast-paced startup, implementing prepress (preflight) processes while launching new marketing and social media campaigns.",
  ],
},
{
  title: "Results",
  points: [
    "Rebranded Printi, improved quality standards in production and prepress, launched successful packaging lines, and delivered impactful marketing materials for web and offline channels.",
  ],
},
{
  title: "Skills:",
  points: [
    "Brand redesign, web2print, prepress & preflight, packaging, campaign design, social media, startup marketing, print production.",
  ],
},

        ]}
        images={[
          { src: "/imgs/printi-pack.png", alt: "Printi Pack" },
          { src: "/imgs/printi-stationary.png", alt: "Printi Stationary" },
          { src: "/imgs/printi-ad.jpg", alt: "Printi Ad" },
          { src: "/imgs/printi-copa.png", alt: "Printi copa" },
          { src: "/imgs/printi-proto.jpg", alt: "Printi Prototype" },
          { src: "/imgs/printi-team.jpg", alt: "Printi Team" },
        ]}
      />
 {/* Título principal */}
        <h2 className="text-4xl font-extrabold font-mono text-center mt-10 mb-10">Clipping</h2>
      {/* FULL WIDTH GALLERY: coloque aqui sua imagem em destaque */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/printi-magazine.png"  // <-- troque para o nome da sua imagem nova
          alt="Printi Magazine"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
          <h2 className="text-4xl font-extrabold font-mono text-center mt-20 mb-10">Covers</h2>
      </div>
         {/* Título principal */}
      <CardStack
        images={[
          { src: "/imgs/printi-cover_fb1.jpg", alt: "Printi Cover 1" },
          { src: "/imgs/printi-cover_fb2.png", alt: "Printi Cover 2" },
          { src: "/imgs/printi-cover_fb3.png", alt: "Printi Cover 3" },
        ]}
      />

    </div>
  );
}

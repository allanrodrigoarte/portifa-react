import ProjectTemplate from '../../components/ProjectTemplate';

export default function Pyy() {
  return (
    <div>
      <ProjectTemplate
        logo="/imgs/py-logo.png" // Substitua caso tenha um logo específico, senão mantenha a embalagem
        logoAlt="PI'Y Brazil Nuts"
        siteUrl="https://hodmedods.co.uk/"
        title="PI’Y Brazil Nuts"
        period="2020–2023"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Strengthen the presence of PI'Y Brazil Nuts in the European market through packaging updates and the creation of an informative A2 poster/folder on the Kayapó people, the value of Brazil nuts, and their socio-environmental impact."
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Represent the Kayapó Indigenous community in the European market, keep visual identity consistent across releases, and deliver content-rich, visually attractive materials that add value to the brand."
            ],
          },
          {
            title: "Results",
            points: [
              "Ongoing packaging and communication adjustments over two years. Designed and produced an A2 informative poster/folder used in European campaigns, successfully communicating indigenous narratives and sustainable sourcing.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "International packaging, cross-cultural branding, editorial design, informational graphics, client communication (English/Portuguese), production artwork, brand consistency, indigenous narrative.",
            ],
          },
        ]}
        images={[
          { src: "/imgs/py-folder.jpg", alt: "PI'Y Folder" }, // Imagem do folder A2 aberto
          { src: "/imgs/py-poster.jpg", alt: "PI'Y Poster" }, // Imagem do folder fechado (ou embalagem)
        ]}
      />
      {/* Descrição extra sobre o cliente internacional */}
      <div className="max-w-2xl mx-auto px-4 py-8 text-gray-800 text-center text-base">
        <p>
          <b>Hodmedod’s</b> é uma empresa britânica líder em alimentos sustentáveis, dedicada à agricultura familiar e produtos nativos de alta qualidade. Colaborar com Hodmedod’s ampliou o alcance internacional do projeto, demonstrando eficiência e adaptação a padrões exigentes do mercado europeu.
        </p>
      </div>
    </div>
  );
}

import ProjectTemplate from '../../components/ProjectTemplate';

export default function Pyy() {
  return (
    <div>
      <ProjectTemplate
        logo="/imgs/py-logo.png"
        logoAlt="PI'Y Brazil Nuts"
        siteUrl="https://hodmedods.co.uk/"
        title="PI’Y Brazil Nuts"
        period="2020–2023"
        summary={null}
        details={[
          {
            title: 'Goal:',
            points: [
              "Strengthen the presence of PI'Y Brazil Nuts in the European market through packaging updates and the creation of an informative A2 poster/folder on the Kayapó people, the value of Brazil nuts, and their socio-environmental impact.",
            ],
          },
          {
            title: 'Challenge:',
            points: [
              "Represent the Kayapó Indigenous community in the European market, keep visual identity consistent across releases, and deliver content-rich, visually attractive materials that add value to the brand.",
            ],
          },
          {
            title: 'Results',
            points: [
              'Ongoing packaging and communication adjustments over two years. Designed and produced an A2 informative poster/folder used in European campaigns, successfully communicating indigenous narratives and sustainable sourcing.',
            ],
          },
          {
            title: 'Skills:',
            points: [
              'International packaging, cross-cultural branding, editorial design, informational graphics, client communication (English/Portuguese), production artwork, brand consistency, indigenous narrative.',
            ],
          },
        ]}
      
      />

      {/* Imagem em largura total */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/piy/eatnuts.png"
          alt="PI’Y Campaign Image - Eat Brazil Nuts"
          className="w-full rounded-lg shadow-none"
          loading="lazy"
        />
      </div>
       <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/piy/pypackage.png"
          alt="PI’Y Campaign Image - Eat Brazil Nuts"
          className="w-full rounded-lg shadow-none"
          loading="lazy"
        />
      </div>
       <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/piy/pyfolder.png"
          alt="PI’Y Campaign Image - Eat Brazil Nuts"
          className="w-full rounded-lg shadow-none"
          loading="lazy"
        />
      </div>

      {/* Descrição adicional sobre o cliente internacional */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800 text-center font-mono">
        <p>
          <strong>Hodmedod’s</strong> is a leading British company in sustainable food, dedicated to family farming and high-quality native products. Collaborating with Hodmedod’s expanded the international reach of the project, demonstrating efficiency and adaptation to the demanding standards of the European market.
        </p>
      </div>
    </div>
  );
}

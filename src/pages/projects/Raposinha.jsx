import ProjectTemplate from "../../components/ProjectTemplate";

export default function Raposinha() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/raposinha-logo.png"
        logoAlt="Raposinha On the Rocks Logo"
        siteUrl="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        title="Raposinha On the Rocks – Short Animation"
        period="2022"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Criar um curta animado cut-out autoral, desde o argumento, roteiro, storyboard até a música e animação, inspirado na minha paixão por raposas e pelo meu gato preto Plutão.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Desenvolver e entregar todas as etapas sozinho: roteiro, ilustrações, música, gravação de guitarra, referência de performance (me filmando), e animação final.",
            ],
          },
          {
            title: "Results:",
            points: [
              "Curta animado finalizado para o curso de Animação no Senac, com destaque para o personagem Raposinha e participação do gato Plutão.",
              "Animação musical original, onde toda a trilha e performance de guitarra foram criadas e gravadas por mim.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Animação cut-out, storyboard, composição musical, gravação de guitarra, character design, direção de arte, Adobe Animate, Adobe Premiere, Wacom.",
            ],
          },
        ]}
      />

      {/* Full-width brutalist gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/raposinha-ontherocks-01.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/raposinha-ontherocks-02.png"
          alt="Storyboard, concept e arte final"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/raposinha-ontherocks-poster.png"
          alt="Raposinha On the Rocks - poster"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>

      {/* 1x3 brutalist square gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/imgs/raposinha-gallery1.png" alt="Raposinha Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/raposinha-gallery2.png" alt="Raposinha Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/raposinha-gallery3.png" alt="Raposinha Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>
    </>
  );
}

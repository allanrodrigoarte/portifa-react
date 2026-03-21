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
          src="/imgs/foxy/foxy-logo.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-ref-pose.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-hands.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-t-pose.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        /><img
          src="/imgs/foxy/foxy-storyboard.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-sketch.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-scenario.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-bands.png"
          alt="Raposinha On the Rocks - frames e concept"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />

        <img
          src="/imgs/foxy/blackthecat.png"
          alt="Storyboard, concept e arte final"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
        <img
          src="/imgs/foxy/foxy-colors.png"
          alt="Raposinha On the Rocks - poster"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>

      {/* Vídeo incorporado */}
      <div className="max-w-5xl mx-auto px-4 my-16 text-center">
        <h2 className="text-2xl font-bold font-mono mb-4">Watch below:</h2>
        <div className="relative pb-[56.25%] h-0 mb-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/cj4sx16AVWk"
            title="Raposinha On the Rocks - Animation Short"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-base font-mono text-gray-700 max-w-2xl mx-auto">
          Raposinha likes to play guitar, in her vlog she posts the videos she records with the help of her cat Black, the camera cat. Or at least... she tries.
          <br />
          Sound, Animation and Direction by Allan Rodrigo.
        </p>
      </div>

      {/* 1x3 brutalist square gallery */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">#refs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/imgs/foxy/foxy-concept.png" alt="Raposinha Gallery Image 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/foxy/foxy-amp.png" alt="Raposinha Gallery Image 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/foxy/foxy-ref.png" alt="Raposinha Gallery Image 3" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>
    </>
  );
}

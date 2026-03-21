import ProjectTemplate from "../../components/ProjectTemplate";

export default function Cassuvium() {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-player");
    videoSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProjectTemplate
        logo="/imgs/cassuvium/cassuvium-logo.png"
        logoAlt="Cassuvium Project Logo"
        siteUrl={null}
        title="Cassuvium - A Lenda Verde"
        period="2023"
        summary="A high-fantasy animated series featuring greenpunk aesthetics, blending magic and technology with uniquely Brazilian elements."
        details={[
          { title: "Format:", points: ["Animated Series"] },
          { title: "Duration:", points: ["175 minutes"] },
          { title: "Episodes:", points: ["6 episodes"] },
          { title: "Genre:", points: ["Sci Fi, GreenPunk, Fantasy, Brazilian"] },
          { title: "Age Rating:", points: ["14+"] },
          { title: "Target Audience:", points: ["Young audiences interested in Brazilian fantasy and sci-fi stories"] },
          {
            title: "Aesthetics:",
            points: [
              "Art Nouveau style featuring natural elements inspired by the World's Largest Cashew Tree (Parnamirim, RN - Brazil) and the works of Alphonse Mucha.",
            ],
          },
        ]}
      />

      {/* Watch Now Button */}
      <div className="max-w-5xl mx-auto text-center my-8">
        <button
          onClick={scrollToVideo}
          className="px-8 py-3 bg-green-600 text-white font-bold font-mono rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          ▶ Watch Cassuvium - A Lenda Verde Now!
        </button>
      </div>

      {/* Full-width gallery with captions */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        {[
          {
            src: "snap1.png",
            alt: "Beatrix and Dexter concept art",
            caption: "Concept art of Beatrix and her robotic companion Dexter.",
          },
          {
            src: "snap2.png",
            alt: "Kaju, the dryad guardian concept",
            caption: "Early concept art of Kaju, the dryad guardian.",
          },
          {
            src: "snap3.png",
            alt: "Character movement and scene exploration",
            caption: "Explorations of character movements and environmental designs.",
          },
          {
            src: "snap4.png",
            alt: "Beatrix detailed character model",
            caption: "Detailed 3D model of Beatrix using Maya with cell-shading techniques.",
          },
          {
            src: "snap5.png",
            alt: "Beatrix in her laboratory environment",
            caption: "Beatrix depicted within her detailed laboratory setting.",
          },
          {
            src: "snap6.png",
            alt: "Critical story moments and character interactions",
            caption: "Critical narrative scenes showing character interactions.",
          },
          {
            src: "snap7.png",
            alt: "Kaju close-up character visualization",
            caption: "Close-up visualization of Kaju highlighting cell-shading details.",
          },
        ].map((img, i) => (
          <figure className="mb-8" key={i}>
            <img
              src={`/imgs/cassuvium/${img.src}`}
              alt={img.alt}
              className="w-full rounded-lg"
              loading="lazy"
            />
            <figcaption className="text-center mt-2 font-mono text-sm text-gray-600">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* YouTube Embed */}
      <div id="video-player" className="max-w-5xl mx-auto px-4 my-16 text-center">
        <h2 className="text-2xl font-bold font-mono mb-4">Watch below:</h2>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
          <iframe
            className="w-full h-[360px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/OW3h7q9s8S8"
            title="Cassuvium - A Lenda Verde"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-base font-mono text-gray-700 max-w-2xl mx-auto mt-4">
          Pilot episode of Cassuvium, an animated series developed by animation students from Senac as their final graduation project. Entirely modeled, animated, and rendered in Maya with cartoon cell-shading.
        </p>
      </div>
    </>
  );
}

import ProjectTemplate from "../../components/ProjectTemplate";

export default function Vacc() {
  const fullImages = [
    "/imgs/vacc/sprite_vacc_logo4.png",
    "/imgs/vacc/vacccity.png",
    "/imgs/vacc/vaccmap.png",
  ];

  const squareImages = [
    { src: "/imgs/square/vacc-sprite.png", alt: "Character concept art" },
    { src: "/imgs/square/vacc-sprite2.png", alt: "In-game sprite animation" },
    { src: "/imgs/square/vacc-sprite3.png", alt: "UI layout and health bar" },
    { src: "/imgs/square/vacc-sprite4.png", alt: "Map scene from level design" },
    { src: "/imgs/square/vacc-screen.png", alt: "Educational content visualization" },
    { src: "/imgs/square/vacc-sprite5.png", alt: "Virus character variation" },
  ];

  return (
    <>
      <ProjectTemplate
        logo="/imgs/vacc-logo.png"
        logoAlt="Vacc Logo"
        siteUrl={null}
        title="VACC – Defeating the Coronavirus"
        period="Creative Brazil Prize Finalist, 2023"
        summary={null}
        details={[
          {
            title: "Goal:",
            points: [
              "Teach children about COVID-19 vaccination through a fun, interactive mobile game.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Deliver a polished title in weeks—aligning launch with São Paulo’s vaccination campaign and working remotely under pandemic restrictions.",
            ],
          },
          {
            title: "Results",
            points: [
              "Released on Google Play in January 2021, supporting São Paulo’s vaccination campaign.",
              "Adopted by schools for vaccine education; finalist at Prêmio Brasil Criativo 2023.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "Game Design, Character & Sprite Animation, UI/UX Design, Level & Map Layout, Educational Content Design",
            ],
          },
        ]}
        images={[
          { src: "/imgs/vacc-gameplay1.png", alt: "Vacc Gameplay 1" },
          { src: "/imgs/vacc-gameplay2.png", alt: "Vacc Gameplay 2" },
          { src: "/imgs/vacc-promo1.png", alt: "Vacc Promo 1" },
        ]}
      />

      {/* Full width image gallery */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        {fullImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Vacc full image ${idx + 1}`}
            className="w-full rounded-lg border border-none shadow-none mb-8"
            loading="lazy"
          />
        ))}
      </div>

      {/* Square image gallery */}
      <div className="max-w-6xl mx-auto px-4 my-16">
        <h2 className="text-xl font-bold mb-6">Game Highlights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {squareImages.map((img, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center bg-white"
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
    </>
  );
}

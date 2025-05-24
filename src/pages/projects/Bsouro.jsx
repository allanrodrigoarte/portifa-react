import ProjectTemplate from '../../components/ProjectTemplate';

export default function Bsouro() {
  return (
    <>
      <ProjectTemplate
        logo="/imgs/bienal-naifs-logo.png"
        logoAlt="Bienal Naïfs do Brasil Logo"
        siteUrl={null}
        title="Bienal Naïfs do Brasil (2018) Special mention"
        period="2018"
        summary="Special mention for the short film “Besouro Independente” at the 14th Bienal Naïfs do Brasil."
        details={[
          {
            title: "Goal:",
            points: [
              "Create an original animated short for the 14th Bienal Naïfs do Brasil art exhibition.",
            ],
          },
          {
            title: "Challenge:",
            points: [
              "Complete a full animation project independently with limited resources.",
            ],
          },
          {
            title: "Results",
            points: [
              "Short film “Besouro Independente” earned a Featured Mention award at the Bienal.",
            ],
          },
          {
            title: "Skills:",
            points: [
              "2D animation, character design, storyboarding, Adobe After Effects. Video Mapping",
            ],
          },
        ]}
      />

      {/* 1. Full width featured image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/bsouro-featured1.png"
          alt="Besouro Independente – festival showcase"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 2. Full width second image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/bsouro-featured2.png"
          alt="Besouro Independente – behind the scenes"
          className="w-full rounded-lg border border-none shadow-none mb-8"
          loading="lazy"
        />
      </div>

      {/* 3. Square gallery (3x3 brutalist grid) */}
      <div className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold mb-6 font-mono">Besouro Gallery</h2>
        <div className="grid grid-cols-3 gap-6">
          <img src="/imgs/bsouro-gallery1.png" alt="Gallery 1" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery2.png" alt="Gallery 2" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery3.png" alt="Gallery 3" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery4.png" alt="Gallery 4" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery5.png" alt="Gallery 5" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery6.png" alt="Gallery 6" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery7.png" alt="Gallery 7" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery8.png" alt="Gallery 8" className="rounded-lg bg-white border shadow" loading="lazy" />
          <img src="/imgs/bsouro-gallery9.png" alt="Gallery 9" className="rounded-lg bg-white border shadow" loading="lazy" />
        </div>
      </div>

      {/* 4. Full width third image */}
      <div className="max-w-5xl mx-auto my-10 px-4">
        <img
          src="/imgs/bsouro-poster.png"
          alt="Besouro Independente - poster"
          className="w-full rounded-lg border border-none shadow-none"
          loading="lazy"
        />
      </div>
    </>
  );
}

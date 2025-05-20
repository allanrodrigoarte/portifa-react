import ProjectTemplate from '../components/ProjectTemplate';

export default function Printi() {
  return (
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
            "Drive Printi’s brand presence through digital marketing and high-quality print designs.",
          ],
        },
        {
          title: "Challenge:",
          points: [
            "Handle end-to-end design – from online ads to print prepress – in a startup environment.",
          ],
        },
        {
          title: "Results",
          points: [
            "Produced diverse marketing collateral and ensured quality in print production",
          ],
        },
        {
          title: "Skills:",
          points: [
            "design, prepress (imposition), advertising design, Adobe Creative Suite",
          ],
        },
      ]}
      images={[
        { src: "/imgs/printi-pack.png", alt: "Printi Pack" },
        { src: "/imgs/printi-PEGN.png", alt: "Printi PEGN" },
        { src: "/imgs/printi-stationary.png", alt: "Printi Stationary" },
      ]}
    />
  );
}